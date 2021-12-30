import { ComponentProps } from 'react';
import { styled } from 'stitches.config';

export type InputProps = ComponentProps<typeof Input>;

export const Input = styled('input', {
  appearance: 'none',
  MozAppearance: 'none',
  WebkitAppearance: 'none',
  margin: 0,

  fontFamily: '$sans',

  backgroundColor: '$elevation0',
  border: '1px solid $colors$interactiveBorder',

  variants: {
    size: {
      1: { fontSize: '$1' },
      2: { fontSize: '$2' },
      3: { fontSize: '$3' },
    },
  },
});
