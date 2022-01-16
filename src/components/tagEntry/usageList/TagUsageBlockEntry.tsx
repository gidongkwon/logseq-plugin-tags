import { BlockEntity, PageEntity } from '@logseq/libs/dist/LSPlugin.user';
import { Box } from 'components/Box';
import { Mark, Paragraph, Text } from 'components/Text';
import { QueryResultBlockEntity } from 'logseqQueryResultTypes';
import React, { useContext, useEffect, useState } from 'react';
import { escapeRegExp } from 'utils';
import { commonEntryStyle } from '.';
import { TagContext } from '../TagContext';
import { TagContainerTypeBadge } from './TagUsageTypeBadge';

type Props = {
  block: QueryResultBlockEntity;
};

export const TagUsageBlockEntry = ({ block }: Props) => {
  const { name } = useContext(TagContext);
  const [containingPage, setContainingPage] = useState<PageEntity | null>(null);
  const [parentBlock, setParentBlock] = useState<BlockEntity | null>(null);

  useEffect(() => {
    logseq.Editor.getPage(block.page.id).then(page => setContainingPage(page));
    logseq.Editor.getBlock(block.parent.id).then(block => setParentBlock(block));
  }, []);

  const escapedTag = escapeRegExp(name);
  const contentSplittedByTagName = block.content.split(
    new RegExp(`(#${escapedTag}|#\\[\\[${escapedTag}\\]\\])`, 'gi'),
  );

  const hasParentBlock = block.parent.id !== block.page.id;

  return (
    <div
      className={commonEntryStyle()}
      onClick={async e => {
        if (containingPage == null) return;
        return logseq.Editor.scrollToBlockInPage(containingPage.name, block.uuid['$uuid$']);
      }}
    >
      <TagContainerTypeBadge type='block' />
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: '$2',
          overflow: 'hidden',
        }}
      >
        {containingPage != null ? (
          <Box
            css={{
              display: 'flex',
              gap: '$2',
              alignItems: 'center',
              flex: '0 1 auto',
              overflow: 'hidden',
              borderRadius: '$2',
            }}
          >
            <Text
              size='1'
              css={{
                padding: '$1',
                color: '$slate10',
                flex: '0 1 auto',
                whiteSpace: 'nowrap',
              }}
            >
              {containingPage.originalName}
            </Text>
            {hasParentBlock && parentBlock != null && (
              <>
                <Text css={{ padding: '$1', color: '$slate8', fontSize: '8px' }}>➤</Text>
                <Text
                  size='1'
                  css={{
                    padding: '$1',
                    color: '$slate10',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {parentBlock.content}
                </Text>
              </>
            )}
          </Box>
        ) : (
          <Text size='1'>Loading...</Text>
        )}
        <Paragraph size='2' css={{ margin: 0 }}>
          {contentSplittedByTagName.map((value, index) =>
            value.toLowerCase() === `#${name}` || value.toLowerCase() === `#[[${name}]]` ? (
              <Mark key={index}>{value}</Mark>
            ) : (
              value
            ),
          )}
        </Paragraph>
      </Box>
    </div>
  );
};
