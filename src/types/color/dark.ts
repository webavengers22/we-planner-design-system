type CommonType = {
  white: string; //#ffff
  black: string; //#000
};

type MainType = {
  orange100: string;
  orange200: string;
  orange300: string;
  orange400: string;
  orange500: string;
  orange600: string;
  orange700: string;
};

type GrayType = {
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
};

type StatusType = {
  error: string;
  info: string;
  masuccessin: string;
};

export type darkColorType = {
  common: CommonType;
  main: MainType;
  gray: GrayType;
  status: StatusType;
};
