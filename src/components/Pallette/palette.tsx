import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode-v7';
import { ColorsDiv, ColorDiv, ColorLabel, ColorShow } from './palette.style';
import { themes } from '@theme/index';
import { ThemePalette } from '@/styles/colors';

export function WePlanPallette() {
  const isDarkMode = useDarkMode();

  const { color } = themes;
  useEffect(() => {
    document
      .querySelector('body')
      ?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    (
      document.querySelector('.sb-show-main') as HTMLDivElement
    ).style.background = color['background-default'];
  }, [isDarkMode]);

  return (
    <ColorsDiv bgColor={color['background-default']}>
      {Object.entries(color).map(([key, value], i) => (
        <ColorDiv key={key} delay={i * 100}>
          <ColorLabel>
            <div>{key}</div>
            <div>{`${value}`}</div>
          </ColorLabel>
          <ColorShow color={value} />
        </ColorDiv>
      ))}
    </ColorsDiv>
  );
}
