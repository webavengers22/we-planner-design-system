import styled from 'styled-components';

interface ColorProps {
  colorValue: string;
  colorName: string;
}

export default function Color({ colorValue, colorName }: ColorProps) {
  return (
    <>
      <ColorContainer>
        <ColorChip colorCode={colorValue} />
        <h1>{`${colorName}`}</h1>
        <h2>{`${colorValue}`}</h2>
      </ColorContainer>
    </>
  );
}

const ColorContainer = styled.article`
  min-width: 170px;
  border-radius: 6px;
  padding: 8px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.12);
  margin-right: 20px;
  border: 1px solid ${({ theme }) => theme.ColorCode.gray100};
  h1 {
    color: ${({ theme }) => theme.ColorCode.gray100};
    margin-bottom: 16px;
  }

  h2 {
    margin: 0;
    ${({ theme }) => theme.ColorCode.gray100};
    color: ${({ theme }) => theme.ColorCode.gray100};
  }
`;

const ColorChip = styled.div<{ colorCode: string }>`
  width: 100%;
  height: 64px;
  border-radius: 4px;
  background-color: ${(props) => props.colorCode};
  margin-bottom: 8px;
`;
