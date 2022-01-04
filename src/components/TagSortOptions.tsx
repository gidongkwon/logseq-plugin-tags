import {
  faSortAlphaDownAlt,
  faSortAlphaUpAlt,
  faSortNumericDownAlt,
  faSortNumericUpAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { CSS, styled } from 'stitches.config';
import { TagSortType } from 'types';
import { Toolbar } from './Toolbar';

const StyledTagOptions = styled(Toolbar.Root, {
  display: 'flex',
  gap: '$2',
});

type Props = {
  sortType: TagSortType;
  onSortTypeChange: (sortType: TagSortType) => void;
  css?: CSS;
};

export const TagSortOptions = ({ sortType, onSortTypeChange, ...props }: Props) => {
  return (
    <StyledTagOptions {...props}>
      <Toolbar.ToggleGroup
        type='single'
        onValueChange={onSortTypeChange}
        defaultValue={sortType}
        aria-label='Sort options'
      >
        <Toolbar.ToggleItem value={TagSortType.NameAsc}>
          <FontAwesomeIcon icon={faSortAlphaUpAlt} />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value={TagSortType.NameDesc}>
          <FontAwesomeIcon icon={faSortAlphaDownAlt} />
        </Toolbar.ToggleItem>
        <Toolbar.Separator />
        <Toolbar.ToggleItem value={TagSortType.UsageAsc}>
          <FontAwesomeIcon icon={faSortNumericUpAlt} />
        </Toolbar.ToggleItem>
        <Toolbar.ToggleItem value={TagSortType.UsageDesc}>
          <FontAwesomeIcon icon={faSortNumericDownAlt} />
        </Toolbar.ToggleItem>
      </Toolbar.ToggleGroup>
    </StyledTagOptions>
  );
};
