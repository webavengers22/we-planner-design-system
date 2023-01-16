import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import * as Styled from './colorPalette.style';
import { WePlanWrapper } from '@components/wrapper';
import { themes } from '@theme/index';

export function ColorPalette() {
  const isDarkMode = useDarkMode();

  useEffect(() => {
    document.querySelector('body')?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    (document.querySelector('#docs-root') as HTMLDivElement).style.background =
      themes.background_default;
  }, [isDarkMode]);

  return (
    <WePlanWrapper>
      <Styled.ColorsDiv bgColor={themes.background_default}>
        {Object.entries(themes.theme[isDarkMode ? 'dark' : 'light']).map(([key, value], i) => (
          <Styled.ColorDiv key={key} delay={i * 100}>
            <Styled.ColorLabel>
              <div>{key}</div>
              <div>{value}</div>
            </Styled.ColorLabel>
            <Styled.ColorShow color={value} />
          </Styled.ColorDiv>
        ))}
      </Styled.ColorsDiv>
    </WePlanWrapper>
  );
}
