import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ITypographyProps, TypographyVariant, TypographyElement } from './type';

export const StyledText = (tagName: TypographyElement) =>
  styled(tagName)<ITypographyProps>`
    ${({ variant = 'body1', bold, theme }) => {
      console.log('theme');
      console.log(variant);
      return '';
    }}
  `;
