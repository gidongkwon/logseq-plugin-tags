import { BlockEntity } from '@logseq/libs/dist/LSPlugin';
import { Mark, Paragraph } from 'components/Text';
import React, { useContext } from 'react';
import { escapeRegExp } from 'utils';
import { commonEntryStyle } from '.';
import { TagContext } from '../TagContext';
import { TagContainerTypeBadge } from './TagUsageTypeBadge';

type Props = {
  block: BlockEntity;
};

export const TagUsageBlockEntry = ({ block }: Props) => {
  const { name } = useContext(TagContext);

  const escapedTag = escapeRegExp(name);
  const contentSplittedByTagName = block.content.split(
    new RegExp(`(#${escapedTag}|#\\[\\[${escapedTag}\\]\\])`, 'gi'),
  );

  return (
    <div
      className={commonEntryStyle()}
      onClick={async e => {
        const containingPage = await logseq.Editor.getPage(block.page.id);
        return logseq.Editor.scrollToBlockInPage(containingPage!.name, block.uuid);
      }}
    >
      <TagContainerTypeBadge type='block' />
      <Paragraph size='2' css={{ margin: 0 }}>
        {contentSplittedByTagName.map((value, index) =>
          value.toLowerCase() === `#${name}` || value.toLowerCase() === `#[[${name}]]` ? (
            <Mark key={index}>{value}</Mark>
          ) : (
            value
          ),
        )}
      </Paragraph>
    </div>
  );
};
