import {
  amber,
  amberA,
  blackA,
  blue,
  blueA,
  bronze,
  bronzeA,
  brown,
  brownA,
  crimson,
  crimsonA,
  cyan,
  cyanA,
  gold,
  goldA,
  grass,
  grassA,
  gray,
  grayA,
  green,
  greenA,
  indigo,
  indigoA,
  lime,
  limeA,
  mauve,
  mauveA,
  mint,
  mintA,
  olive,
  oliveA,
  orange,
  orangeA,
  pink,
  pinkA,
  plum,
  plumA,
  purple,
  purpleA,
  red,
  redA,
  sage,
  sageA,
  sand,
  sandA,
  sky,
  skyA,
  slate,
  slateA,
  teal,
  tealA,
  tomato,
  tomatoA,
  violet,
  violetA,
  whiteA,
  yellow,
  yellowA,
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { CSSProperties } from '@stitches/react/types/css-util';
export type { VariantProps } from '@stitches/react';

export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config, reset } =
  createStitches({
    theme: {
      colors: {
        ...gray,
        ...mauve,
        ...slate,
        ...sage,
        ...olive,
        ...sand,
        ...tomato,
        ...red,
        ...crimson,
        ...pink,
        ...plum,
        ...purple,
        ...violet,
        ...indigo,
        ...blue,
        ...sky,
        ...mint,
        ...cyan,
        ...teal,
        ...green,
        ...grass,
        ...lime,
        ...yellow,
        ...amber,
        ...orange,
        ...brown,
        ...bronze,
        ...gold,

        ...grayA,
        ...mauveA,
        ...slateA,
        ...sageA,
        ...oliveA,
        ...sandA,
        ...tomatoA,
        ...redA,
        ...crimsonA,
        ...pinkA,
        ...plumA,
        ...purpleA,
        ...violetA,
        ...indigoA,
        ...blueA,
        ...skyA,
        ...mintA,
        ...cyanA,
        ...tealA,
        ...greenA,
        ...grassA,
        ...limeA,
        ...yellowA,
        ...amberA,
        ...orangeA,
        ...brownA,
        ...bronzeA,
        ...goldA,

        ...whiteA,
        ...blackA,

        // Semantic
        lowContrast: '$slate8',
        highContrast: 'black',

        primary: 'hsl(0, 0%, 92%)',
        primaryHover: 'hsl(0, 0%, 97%)',
        primaryActive: 'hsl(0, 0%, 100%)',
        primaryHoverA: 'hsl(0, 0%, 97%, 0.2)',
        primaryActiveA: 'hsl(0, 0%, 100%, 0.2)',

        elevation0: 'white',
        elevation0Hover: '$slate2',
        elevation0Active: '$slate3',
        elevation1: '$slate2',
        elevation1Hover: '$slate3',
        elevation1Active: '$slate4',
        elevation2: '$slate3',
        elevation2Hover: '$slate4',
        elevation2Active: '$slate5',
        elevation3: '$slate4',
        elevation3Hover: '$slate5',
        elevation3Active: '$slate6',

        disabledText: '$slate8',
        disabledBackground: '$slate2',
        disabledBorder: '$slate7',

        interactiveBorder: '$slate7',
        interactiveBorderHover: '$slate8',
      },
      space: {
        1: '2px',
        2: '4px',
        3: '8px',
        4: '12px',
        5: '24px',
      },
      sizes: {
        1: '2px',
        2: '4px',
        3: '8px',
        4: '12px',
        5: '24px',
      },
      fonts: {
        sans: 'Inter, sans-serif, system-ui, -apple-system, BlinkMacSystemFont',
      },
      fontWeights: {
        regular: '400',
        medium: '500',
        bold: '700',
      },
      fontSizes: {
        1: '12px',
        2: '14px',
        3: '20px',
      },
      radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        round: '50%',
        pill: '9999px',
      },
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        max: '999',
      },
    },
    media: {
      bp1: `(max-width: 520px)`,
      bp2: `(max-width: 830px)`,
      bp3: `(max-width: 1100px)`,
      bp4: `(min-width: 1100px)`,
      motionSafe: '(prefers-reduced-motion: no-preference)',
      hover: `(hover: hover)`,
    },
    utils: {
      marginX: (value: Stitches.PropertyValue<'marginLeft'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      marginY: (value: Stitches.PropertyValue<'marginTop'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      paddingX: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      paddingY: (value: Stitches.PropertyValue<'paddingTop'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      borderX: (value: Stitches.PropertyValue<'borderLeft'>) => ({
        borderLeft: value,
        borderRight: value,
      }),
      borderY: (value: Stitches.PropertyValue<'borderTop'>) => ({
        borderTop: value,
        borderBottom: value,
      }),
      borderRaidusLeft: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
        borderTopLeftRadius: value,
        borderBottomLeftRadius: value,
      }),
      borderRaidusRight: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
        borderTopRightRadius: value,
        borderBottomRightRadius: value,
      }),
      borderRaidusTop: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
        borderTopLeftRadius: value,
        borderTopRightRadius: value,
      }),
      borderRaidusBottom: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
        borderBottomLeftRadius: value,
        borderBottomRightRadius: value,
      }),
      size: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),
      textGradient: (value: Stitches.PropertyValue<'backgroundImage'>) => ({
        backgroundImage: value,
        backgroundSize: '100%',
        WebkitBackgroundClip: 'text',
        MozBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        MozTextFillColor: 'transparent',
      }),
      appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
        WebkitAppearance: value,
        appearance: value,
      }),
      backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
  });

export type CSS = Stitches.CSS<typeof config>;
export type PropertyValue<Property extends keyof CSSProperties> = Stitches.PropertyValue<
  Property,
  typeof config
>;
export type ScaleValue<Scale> = Stitches.ScaleValue<Scale, typeof config>;
export type Scale = keyof typeof config['theme'];
