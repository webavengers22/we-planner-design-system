import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ColorsDiv, ColorDiv, ColorLabel, ColorShow } from './palette.style';
import { themes } from '@theme/index';
import { useTheme } from '@/contexts';

export function WePlanPallette() {
  const { isDarkTheme } = useTheme();
  console.log('WePlanPallette');
  console.log(isDarkTheme);
  return (
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
  );
}
