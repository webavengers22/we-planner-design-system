import React, { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { PaletteDiv, ColorDiv, ColorRow, ColorItem, ColorLabel, Color } from './palette.style';
import { themes, paletteColorList } from '@theme/index';

export function WePlanPallette() {
  return (
    <PaletteDiv bgColor={themes.background_default}>
      {Object.keys(paletteColorList).map((key) => (
        <ColorDiv key={key} className={key}>
          <h3>{`${key} Color`}</h3>
          <ColorRow>
            {Object.entries(paletteColorList[key]).map(([key, value], i) => (
              <ColorItem key={value} delay={i * 100}>
                <Color color={value} />
                <ColorLabel>
                  <span className="title">{key}</span>
                  <span className="value">{value}</span>
                </ColorLabel>
              </ColorItem>
            ))}
          </ColorRow>
        </ColorDiv>
      ))}
    </PaletteDiv>
  );
}
