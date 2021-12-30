import React from 'react';
import { useTags } from '../hooks/useTags';
import { styled } from '../stitches.config';
import { TagContext } from './tagEntry/TagContext';
import { TagEntry } from './tagEntry/TagEntry';

const StyldTagList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

type Props = {
  filter: string;
};

export function TagList({ filter }: Props) {
  const tags = useTags();

  return (
    <StyldTagList>
      {Object.keys(tags)
        .sort()
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
