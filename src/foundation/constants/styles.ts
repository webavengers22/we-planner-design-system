import { css } from 'styled-components';
import { typographyStylesKey } from '../typings';

import { TYPOGRAPHY_STYLES, TYPOGRAPHY_FONT } from '../constants';

/**
 * 해당 스타일명에 해당하는 css 조각을 반환
 */
export const getTypographyStyles = (typographyStyle: typographyStylesKey) => {
  const { fontSize, lineHeight } = TYPOGRAPHY_STYLES[typographyStyle];
  return css`
    font-size: ${fontSize};
    line-height: ${lineHeight};
    font-family: ${TYPOGRAPHY_FONT};
    font-display: swap;
  `;
};
