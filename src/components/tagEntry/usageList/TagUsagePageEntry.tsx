import { PageEntity } from '@logseq/libs/dist/LSPlugin';
import { Text } from 'components/Text';
import React from 'react';
import { commonEntryStyle } from '.';
import { TagContainerTypeBadge } from './TagUsageTypeBadge';

type Props = {
  page: PageEntity;
};

export const TagUsagePageEntry = ({ page }: Props) => {
  return (
    <div
      className={commonEntryStyle()}
      onClick={async e => {
        return logseq.App.pushState('page', { name: page.name });
      }}
    >
      <TagContainerTypeBadge type='page' />
      <Text size='2'>{(page as any)['original-name']}</Text>
    </div>
  );
};
