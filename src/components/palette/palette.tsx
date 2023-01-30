import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { ColorsDiv, ColorDiv, ColorLabel, ColorShow } from './palette.style';
import { themes } from '@theme/index';

export function WePlanPallette() {
  const isDarkMode = useDarkMode();

  useEffect(() => {
    document.querySelector('body')?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    (document.querySelector('.sb-show-main') as HTMLDivElement).style.background =
      themes.background_default;
  }, [isDarkMode]);

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
