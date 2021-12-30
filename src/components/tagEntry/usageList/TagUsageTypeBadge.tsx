import React from 'react';
import { styled } from 'stitches.config';
import { TagUsageType } from 'types';

const StyledTagContainerTypeBadge = styled('div', {
  flex: '0 0 auto',
  padding: '$2',
  borderRadius: '$1',
  fontSize: '$1',

  variants: {
    color: {
      page: {
        backgroundColor: '$blue3',
        color: '$blue9',
      },
      block: {
        backgroundColor: '$orange3',
        color: '$orange9',
      },
    },
  },
});

type Props = {
  type: TagUsageType;
};

export function TagContainerTypeBadge({ type }: Props) {
  return (
    <StyledTagContainerTypeBadge color={type}>
      {type === 'page' ? 'P' : 'B'}
    </StyledTagContainerTypeBadge>
  );
}
