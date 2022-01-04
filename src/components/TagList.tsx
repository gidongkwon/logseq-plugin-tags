import React from 'react';
import { TagSortType } from 'types';
import { orderBy } from 'utils';
import { useTags } from '../hooks/useTags';
import { styled } from '../stitches.config';
import { TagContext } from './tagEntry/TagContext';
import { TagEntry } from './tagEntry/TagEntry';

const StyldTagList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
});

type Props = {
  filter: string;
  sortType: TagSortType;
};

export function TagList({ filter, sortType }: Props) {
  const tags = useTags();

  const orderByFuncBySorType = {
    [TagSortType.NameAsc]: (a: string, b: string) => a.localeCompare(b),
    [TagSortType.NameDesc]: (a: string, b: string) => b.localeCompare(a),
    [TagSortType.UsageAsc]: orderBy((tagName: string) => tags[tagName].length),
    [TagSortType.UsageDesc]: orderBy((tagName: string) => tags[tagName].length, true),
  };

  return (
    <StyldTagList>
      {Object.keys(tags)
        .sort(orderByFuncBySorType[sortType])
        .filter(tagName => {
          if (filter.trim() === '') return true;
          return tagName.includes(filter);
        })
        .map(tagName => {
          return (
            <TagContext.Provider value={{ name: tagName, usages: tags[tagName] }}>
              <TagEntry key={tagName} />
            </TagContext.Provider>
          );
        })}
    </StyldTagList>
  );
}
