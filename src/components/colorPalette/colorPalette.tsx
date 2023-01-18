import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ColorsDiv, ColorDiv, ColorLabel, ColorShow } from './colorPalette.style';
import { WePlanWrapper } from '@components/wrapper';
import { themes } from '@theme/index';

export function ColorPalette() {
  return (
    <WePlanWrapper>
      <ColorsDiv bgColor={themes.background_default}>
        {Object.entries(themes).map(([key, value], i) => (
          <ColorDiv key={key} delay={i * 100}>
            <ColorLabel>
              <div>{key}</div>
              <div>{value}</div>
            </ColorLabel>
            <ColorShow color={value} />
          </ColorDiv>
        ))}
      </ColorsDiv>
    </WePlanWrapper>
  );
}
