import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import { css, styled } from 'stitches.config';

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  padding: '$3',
  minWidth: 'max-content',
  borderRadius: '$2',
  backgroundColor: '$elevation1',
});

const itemStyles = css({
  all: 'unset',
  flex: '0 0 auto',
  color: '$slate11',
  height: '$5',
  padding: '0 $2',
  borderRadius: '$1',
  display: 'inline-flex',
  fontSize: '$3',
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    color: '$slate12',
    backgroundColor: '$elevation1Hover',
  },
  '&:focus': {
    position: 'relative',
    boxShadow: '0 0 0 2px $elevation2',
  },

  variants: {
    shape: {
      square: {
        width: '$$height',
      },
    },
  },
});

const StyledSeparator = styled(ToolbarPrimitive.Separator, {
  width: 1,
  backgroundColor: '$slate6',
  margin: '0 10px',
});

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: 'inline-flex',
  borderRadius: 4,
});

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, itemStyles, {
  boxShadow: 0,
  marginLeft: '$1',
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': {
    color: '$blue11',
    backgroundColor: '$blue5',
  },
});

export const Toolbar = {
  Root: StyledToolbar,
  Separator: StyledSeparator,
  ToggleGroup: StyledToggleGroup,
  ToggleItem: StyledToggleItem,
};
