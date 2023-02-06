import { PaletteDiv, ColorDiv, ColorRow, ColorItem, ColorLabel, Color } from './palette.style';
import { themes, paletteColorList } from '@theme/index';
import { WePlanWrapper } from '@components/wrapper';
const { color } = themes;
export function WePlanPallette() {
  return (
    <WePlanWrapper>
      <PaletteDiv bgColor={color.background_default}>
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
    </WePlanWrapper>
  );
}
