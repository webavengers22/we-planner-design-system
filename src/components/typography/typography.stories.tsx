import { renderToStaticMarkup } from 'react-dom/server';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  Paper,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TitleContainer,
} from 'storybook/styles/common.styles';
import { typographyStylesKey, TYPOGRAPHY_STYLES_STORYBOOK } from 'foundation';
import { Typography } from '.';

export default {
  title: 'Component/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Overview: ComponentStory<typeof Typography> = () => (
  <Paper $minWidth={640} $maxWidth={800}>
    <TitleContainer>
      <Typography variant="headline1" bold={true}>
        Typography
      </Typography>
    </TitleContainer>
    <Table>
      <TableHeader>
        <TableRow>
          <TableColumn isHeader>StyleName</TableColumn>
          <TableColumn isHeader align="center">
            FontSize
          </TableColumn>
          <TableColumn isHeader align="center">
            FontType
          </TableColumn>
          <TableColumn isHeader align="center">
            LineHeight
          </TableColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Object.entries(TYPOGRAPHY_STYLES_STORYBOOK).map(([key, value]) => {
          const { fontSize, fontName, lineHeight, fontVarint, fontWeight } = value;
          const fontBold = fontWeight ? 'Bold' : 'Regular';
          return (
            <TableRow key={key}>
              <TableColumn>
                <Typography variant={fontVarint as typographyStylesKey} bold={fontWeight}>
                  {fontName}
                </Typography>
              </TableColumn>
              <TableColumn align="center">{fontSize}</TableColumn>
              <TableColumn align="center">{fontBold}</TableColumn>
              <TableColumn align="center">{lineHeight}</TableColumn>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  </Paper>
);

const Template: ComponentStory<typeof Typography> = (args) => (
  <Paper>
    <TitleContainer>
      <Typography variant="headline2">적용 스타일</Typography>
      <Typography {...args}>{args.children || args.variant}</Typography>
    </TitleContainer>
    <Typography variant="headline2">실제 마크업</Typography>
    {renderToStaticMarkup(<Typography {...args}>{args.children || args.variant}</Typography>)}
  </Paper>
);

export const Variants = Template.bind({});
Variants.args = { variant: 'headline2' };
