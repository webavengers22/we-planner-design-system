import { getTypographyStyles } from '@/styles/fonts';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ITypographyProps, TypographyElement } from './type';
import { themes } from '@/theme';
export const StyledText = (tagName: TypographyElement) => styled(
  tagName,
)<ITypographyProps>`
  ${({ variant = 'body1', bold, italic, align }) => {
    return css`
      font-weight: ${bold
        ? themes.font['weight-bold']
        : themes.font['weight-regular']};
      color: ${themes.color['text-default']};
      font-style: ${italic ? 'oblique' : 'normal'};
      ${getTypographyStyles(variant)}
      text-align: ${align};
    `;
  }}
  margin: 0;
`;
