import { typographyStylesKey, typographyTagNamesType, typographyColorType } from 'foundation';

export interface TypographyProps {
  variant?: typographyStylesKey;
  tagName?: typographyTagNamesType;
  color?: typographyColorType; //typography 색상
  children?: React.ReactNode;
  bold?: boolean;
}
