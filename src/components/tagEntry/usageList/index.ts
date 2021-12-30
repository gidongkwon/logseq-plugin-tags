import { css } from 'stitches.config';

export const commonEntryStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
  padding: '$3',

  '&:hover': {
    backgroundColor: '$slate2',
  },
});
