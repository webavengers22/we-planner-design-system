interface FontsVariables {
  fontFamily: string;
  fontDisplay: string;
  fontWeightRegular: number;
  fontWeightBold: number;
  fontSizeNormal: string;
  fontSize200: string;
  fontSize300: string;
  fontSize400: string;
  fontSize500: string;
  fontSize600: string;
  fontSize700: string;
  fontSize800: string;
  fontSize900: string;

  lineHeightNormal: string;
  lineHeight200: string;
  lineHeight300: string;
  lineHeight400: string;
  lineHeight500: string;
  lineHeight600: string;
  lineHeight700: string;
  lineHeight800: string;
}

type FontsKey = keyof FontsVariables;
type FontsType = Record<FontsKey, string>;

export type { FontsVariables, FontsKey, FontsType };
