import { Meta, StoryObj } from '@storybook/react';
import { Typography } from './typography';
import {
  Paper,
  Table,
  TableBody,
  TableColumn,
  TableHeader,
  TableRow,
  TitleContainer,
} from '@/storybook/styles/common.styles';
import { storybook_typography } from '@/styles/fonts/token';
import { StorybookMapping } from '.';
import { TypographyStoryVariant } from '@styles/fonts';
import { composeStepRunners } from '@storybook/preview-api';
export default {
  title: 'component/Typography',
  component: Typography,
  args: {
    italic: false,
    bold: false,
    align: 'left',
  },
} as Meta<typeof Typography>;

type Template = StoryObj<typeof Typography>;

export const Overview: Template = {
  render: (args) => {
    console.log(args);
    return (
      <Paper $minWidth={640} $maxWidth={800}>
        <TitleContainer>
          <Typography variant="headline1" bold={true} align="center">
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
            {Object.entries(storybook_typography).map(([key, value]) => {
              const { fontSize, lineHeight, fontWeight } = value;
              const fontBold = fontWeight ? 'Bold' : 'Regular';
              const fontVariant = StorybookMapping[key as TypographyStoryVariant];
              return (
                <TableRow key={key}>
                  <TableColumn>
                    <Typography variant={fontVariant} bold={fontWeight}>
                      {fontVariant}
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
  },
};
