import { css, CSSProp } from 'styled-components';
import { viewVariable } from 'theme/view';

const device = {
  laptop: `${viewVariable.large_w}px`, //1920,
  tablet: `${viewVariable.medium_w}px`, //1023,
  mobile: `${viewVariable.small_w}px`, //767,
};

const setMobileViewport = (literals: TemplateStringsArray, ...args: string[]): CSSProp => {
  return css`
    @media only screen and (max-width: ${device.mobile}) {
      ${css(literals, ...args)}
    }
  `;
};

const setTabletViewport = (literals: TemplateStringsArray, ...args: string[]): CSSProp => {
  return css`
    @media only screen and (min-width: ${device.mobile}) and (max-width: ${device.tablet}) {
      ${css(literals, ...args)}
    }
  `;
};

const setTabletAboveViewport = (literals: TemplateStringsArray, ...args: string[]): CSSProp => {
  return css`
    @media only screen and (min-width: ${device.mobile}) {
      ${css(literals, ...args)}
    }
  `;
};

const setLaptopViewport = (literals: TemplateStringsArray, ...args: string[]): CSSProp => {
  return css`
    @media only screen and (min-width: ${device.tablet}) and (max-width: ${device.laptop}) {
      ${css(literals, ...args)}
    }
  `;
};

const setLaptopAboveViewport = (literals: TemplateStringsArray, ...args: string[]): CSSProp => {
  return css`
    @media only screen and (min-width: ${device.tablet}) {
      ${css(literals, ...args)}
    }
  `;
};

const setDesktopViewport = (literals: TemplateStringsArray, ...args: string[]): CSSProp => {
  return css`
    @media only screen and (min-width: ${device.laptop}) {
      ${css(literals, ...args)}
    }
  `;
};

export {
  setMobileViewport,
  setTabletViewport,
  setTabletAboveViewport,
  setLaptopViewport,
  setLaptopAboveViewport,
  setDesktopViewport,
};
