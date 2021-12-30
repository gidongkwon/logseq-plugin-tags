import { css, styled } from '../stitches.config';

const text = css({
  color: '$highContrast',
  fontFamily: '$sans',

  variants: {
    size: {
      1: { fontSize: '$1' },
      2: { fontSize: '$2' },
      3: { fontSize: '$3' },
    },
  },
});

export const Text = styled('span', text);
export const Quote = styled('q', text);
export const Paragraph = styled('p', text);
export const ListItem = styled('li', text);
export const Small = styled('small', text);
export const Deleted = styled('del', text);
export const H1 = styled('h1', text);
export const H2 = styled('h2', text);
export const H3 = styled('h3', text);
export const H4 = styled('h4', text);
export const H5 = styled('h5', text);
export const H6 = styled('h6', text);

export const Ins = styled('ins', text, { textDecoration: 'none' });
export const Em = styled('em', text, { fontStyle: 'italic' });
export const Strong = styled('strong', text, { fontWeight: '$2' });
export const Mark = styled('mark', text, { backgroundColor: '$yellow3' });
