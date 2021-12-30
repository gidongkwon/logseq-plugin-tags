import { BlockEntity, PageEntity } from '@logseq/libs/dist/LSPlugin.user';
import { useLayoutEffect, useMemo, useState } from 'react';
import { Tag } from '../types';
import { escapeRegExp } from '../utils';
import { useMountedState } from './useMountedState';

export function useTags(): Record<string, Array<BlockEntity | PageEntity>> {
  const isMounted = useMountedState();
  const [rawBlockRefs, setRawBlockRefs] = useState<any[]>([]);
  const [rawPageTags, setRawPageTags] = useState<any[]>([]);

  useLayoutEffect(() => {
    (async () => {
      const rawRefs = await logseq.DB.datascriptQuery(`
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
        setRawBlockRefs(rawRefs);
        setRawPageTags(rawPageTags);
      }
    })();
  }, []);

  return useMemo(() => {
    type TagAndUsage = {
      tagName: string;
      blockOrPage: any;
    };

    const tagsWithNullsFromRef: Array<TagAndUsage | null> = rawBlockRefs.map(
      ([blockContent, tagName, block]: [string, string, any]) => {
        const escapedTag = escapeRegExp(tagName);
        // We collect pagetags in separate query, so we need to filter out the page tags
        if (blockContent.includes('tags::') && block['pre-block?'] === true) {
          return null;
        }
        if (blockContent.match(new RegExp(`#${escapedTag}|#\[\[${escapedTag}\]\]`, 'g')) != null) {
          return {
            tagName,
            blockOrPage: block,
          };
        }
        return null;
      },
    );

    const tagsFromPageTags: TagAndUsage[] = rawPageTags.map(([tagName, page]: string[]) => {
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