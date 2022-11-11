import Color from './Color';
import theme from 'theme/light';
import styled from 'styled-components';
import { Meta } from '@storybook/react';

export default {
  title: 'resources/Color',
  component: Color,
  parameters: {
    componentSubtitle: 'We planner 서비스의 기본 색상 입니다.',
  },
} as Meta<typeof Color>;

const colorValue = theme.ColorCode;
const mainColorsArray = Object.keys(colorValue.main).map(function (key) {
  return { name: String(key), code: colorValue.main[key] };
});

const cmnColorsArray = Object.keys(colorValue.common).map(function (key) {
  console.log(key);
  return { name: String(key), code: colorValue.common[key] };
});

const grayColorsArray = Object.keys(colorValue.gray).map(function (key) {
  return { name: String(key), code: colorValue.gray[key] };
});

const statusColorsArray = Object.keys(colorValue.status).map(function (key) {
  return { name: String(key), code: colorValue.status[key] };
});

export const color = () => {
  return (
    <>
      <h2>{`공통`}</h2>
      <Container>
        {cmnColorsArray.map((item) => (
          <Color colorValue={item.code} colorName={item.name} />
        ))}
      </Container>
      <h2>{`메인컬러`}</h2>
      <Container>
        {mainColorsArray.map((item) => (
          <Color colorValue={item.code} colorName={item.name} />
        ))}
      </Container>
      <h2>{`Gray컬러`}</h2>
      <Container>
        {grayColorsArray.map((item) => (
          <Color colorValue={item.code} colorName={item.name} />
        ))}
      </Container>
      <h2>{`Status컬러`}</h2>
      <Container>
        {statusColorsArray.map((item) => (
          <Color colorValue={item.code} colorName={item.name} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.section`
  display: flex;
  margin-bottom: 20px;
  margin-right: 20px;
  flex-wrap: wrap;
`;

color.story = {
  name: 'color',
};
