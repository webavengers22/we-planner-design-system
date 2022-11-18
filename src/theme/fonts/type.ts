interface FontsVariables {
  fontFamily: string;
  fontDisplay: string;
  fontWeightRegular: number;
  fontWeightBold: number;
  fontSizeNormal: string;
  fontSize200: number;
  fontSize300: number;
  fontSize400: number;
  fontSize500: number;
  fontSize600: number;
  fontSize700: number;
  fontSize800: number;
  fontSize900: number;
  lineHeightNormal: string;
  lineHeight200: number;
  lineHeight300: number;
  lineHeight400: number;
  lineHeight500: number;
  lineHeight600: number;
  lineHeight700: number;
  lineHeight800: number;
}

type FontsKey = keyof FontsVariables;
type FontsType = Record<FontsKey, string>;

export type { FontsVariables, FontsKey, FontsType };
