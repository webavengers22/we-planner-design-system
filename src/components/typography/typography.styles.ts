import { getTypographyStyles } from '@/styles/fonts';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { themes } from '..';
import { ITypographyProps, TypographyElement } from './type';
export const StyledText = (tagName: TypographyElement) => styled(tagName)<ITypographyProps>`
  ${({ variant = 'body1', bold, theme, italic, align }) => {
    console.log(align);
    return css`
      font-weight: ${bold ? theme.font.weight_bold : theme.font.weight_regular};
      color: ${themes.color.text_default};
      font-style: ${italic ? 'oblique' : 'normal'};
      ${getTypographyStyles(variant)}
      text-align: ${align};
    `;
  }}
  margin: 0;
`;
