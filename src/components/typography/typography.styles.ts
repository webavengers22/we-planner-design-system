import { getTypographyStyles } from '@/styles/fonts';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ITypographyProps, TypographyElement } from './type';
export const StyledText = (tagName: TypographyElement) => styled(tagName)<ITypographyProps>`
  ${({ variant = 'body1', bold, theme }) =>
    css`
      font-weight: ${bold ? theme.font.weight_bold : theme.font.weight_regular};
      ${getTypographyStyles(variant)}
    `};
  margin: 0;
`;
