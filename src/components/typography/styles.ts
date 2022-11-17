import styled, { css } from 'styled-components';

import { getTypographyStyles } from 'foundation/constants';
import { theme } from 'theme';
import { typographyTagNamesType, typographyStylesKey } from 'foundation/typings';

export const getTypographyComponent = (tagName: typographyTagNamesType) => styled(tagName)<{
  variant?: typographyStylesKey;
  color?: string;
  bold?: boolean;
}>`
  ${({ variant = 'body1', bold }) =>
    css`
      font-weight: ${bold ? theme.fontWeightBold : theme.fontWeightRegular};
      ${getTypographyStyles(variant)}
    `};
  margin: 0;
`;
