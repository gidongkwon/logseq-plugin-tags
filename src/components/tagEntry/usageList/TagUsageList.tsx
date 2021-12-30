import { TagContext } from 'components/tagEntry/TagContext';
import React, { ElementRef, useContext } from 'react';
import { CSS, styled } from 'stitches.config';
import { isPage } from 'utils';
import { TagUsageBlockEntry } from './TagUsageBlockEntry';
import { TagUsagePageEntry } from './TagUsagePageEntry';

const StyledTagUsageList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

type Props = {
  css?: CSS;
};

export const TagUsageList = React.forwardRef<ElementRef<typeof StyledTagUsageList>, Props>(
  ({ ...props }, forwardedRef) => {
    const { usages } = useContext(TagContext);

    return (
      <StyledTagUsageList ref={forwardedRef} {...props}>
        {usages.map(blockOrPage =>
          isPage(blockOrPage) ? (
            <TagUsagePageEntry page={blockOrPage} />
          ) : (
            <TagUsageBlockEntry block={blockOrPage} />
          ),
        )}
      </StyledTagUsageList>
    );
  },
);
