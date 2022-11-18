import { typography } from 'theme/styles';

type typographyStylesKey = keyof typeof typography;

type typographyTagNamesType = keyof Pick<
  HTMLElementTagNameMap,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label' | 'pre'
>;

type typographyColorType =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'textPrimary'
  | 'textSecondary'
  | 'error';

type typographyWeightType = 'normal' | 'bold';

export type {
  typographyWeightType,
  typographyTagNamesType,
  typographyStylesKey,
  typographyColorType,
};
