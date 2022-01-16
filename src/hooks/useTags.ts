import { QueryResultBlockEntity, QueryResultPageEntity } from 'logseqQueryResultTypes';
import { useLayoutEffect, useMemo, useState } from 'react';
import { Tag } from '../types';
import { escapeRegExp } from '../utils';
import { useMountedState } from './useMountedState';

export function useTags(): Record<string, Array<QueryResultBlockEntity | QueryResultPageEntity>> {
  const isMounted = useMountedState();
  const [rawBlockRefs, setRawBlockRefs] = useState<[string, string, QueryResultBlockEntity][]>([]);
  const [rawPageTags, setRawPageTags] = useState<[string, QueryResultPageEntity][]>([]);

  useLayoutEffect(() => {
    (async () => {
      const rawBlockRefs = await logseq.DB.datascriptQuery(`
        [:find ?content ?tag (pull ?b [*])
          :where
          [?b :block/refs ?page-ref]
          [?b :block/content ?content]
          [?page-ref :block/name ?tag]
        ]
      `);

      const rawPageTags = await logseq.DB.datascriptQuery(`
        [:find ?tag (pull ?page [*])
          :where
          [?page :block/tags ?tag-ref]
          [?tag-ref :block/name ?tag]
        ]
      `);

      if (isMounted()) {
        setRawBlockRefs(rawBlockRefs);
        setRawPageTags(rawPageTags);
      }
    })();
  }, []);

  return useMemo(() => {
    type TagAndUsage = {
      tagName: string;
      blockOrPage: QueryResultBlockEntity | QueryResultPageEntity;
    };

    const tagsWithNullsFromRef: Array<TagAndUsage | null> = rawBlockRefs.map(
      ([blockContent, tagName, block]) => {
        const escapedTag = escapeRegExp(tagName);
        const lowercaseBlockContent = blockContent.toLowerCase();

        // We collect pagetags in separate query, so we need to filter out the page tags
        if (
          (lowercaseBlockContent.includes('tags::') || lowercaseBlockContent.includes('#+tags:')) &&
          block['pre-block?'] === true
        ) {
          return null;
        }
        if (
          blockContent.match(new RegExp(`#${escapedTag}|#\\[\\[${escapedTag}\\]\\]`, 'gi')) != null
        ) {
          return {
            tagName,
            blockOrPage: block,
          };
        }

        // if (blockContent.includes('#')) {
        //   console.log('No match:', escapedTag, blockContent);
        // }
        return null;
      },
    );

    const tagsFromPageTags: TagAndUsage[] = rawPageTags.map(([tagName, page]) => {
      return {
        tagName,
        blockOrPage: page,
      };
    });

    const tags: TagAndUsage[] = [
      ...tagsWithNullsFromRef.filter((value): value is TagAndUsage => value != null),
      ...tagsFromPageTags,
    ];

    const blocksOrPageByTag = tags.reduce((dict, { tagName, blockOrPage }) => {
      const arrToPush = dict[tagName] ?? [];
      arrToPush.push(blockOrPage);
      dict[tagName] = arrToPush;
      return dict;
    }, {} as Record<Tag['name'], Tag['usages']>);
    return blocksOrPageByTag;
  }, [rawBlockRefs, rawPageTags]);
}
