import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import styled, { keyframes } from 'styled-components';
import { WePlanWrapper } from 'components';
import { ThemeColorSets } from 'theme/variable';

const fadeIn = keyframes`
    0% {
        transform: translate(0, 12px);
        opacity: 0;
    }
    100% {
        transform: translate(0px, 0px);
        opacity: 1;
    }
`;

const ColorsDiv = styled.div<{ bgColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  margin: 0 auto;
`;

const ColorDiv = styled.div<{ delay: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  animation: ${fadeIn} 1s cubic-bezier(0.08, 0.37, 0, 1.02) forwards;
  animation-delay: ${(props) => props.delay}ms;
`;

const ColorLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div:first-of-type {
    color: var(--text);
    font-size: 14px;
    font-weight: 600;
  }

  div:last-child {
    color: var(--text);
    font-size: 14px;
  }
`;

const ColorShow = styled.div<{ color: string }>`
  width: 60%;
  height: 52px;
  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: solid 1px var(--border3);
`;

export function Colors() {
  const isDarkMode = useDarkMode();

  useEffect(() => {
    document.querySelector('body')?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    (document.querySelector('#docs-root') as HTMLDivElement).style.background =
      ThemeColorSets[isDarkMode ? 'dark' : 'light'].background;
  }, [isDarkMode]);

  return (
    <WePlanWrapper>
      <ColorsDiv bgColor={ThemeColorSets[isDarkMode ? 'dark' : 'light'].background}>
        {Object.entries(ThemeColorSets[isDarkMode ? 'dark' : 'light']).map(([key, value], i) => (
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
