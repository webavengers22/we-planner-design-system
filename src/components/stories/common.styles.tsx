import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { theme } from 'theme';

type TextAlign = 'left' | 'center' | 'right';

export const Paper = styled.div<{
  $minWidth?: number;
  $maxWidth?: number;
}>`
  background: ${theme.background};
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0px 16px 0 rgba(0, 0, 0, 0.1);

  ${({ $minWidth }) =>
    $minWidth &&
    css`
      min-width: ${$minWidth}px;
    `}
  ${({ $maxWidth }) =>
    $maxWidth &&
    css`
      max-width: ${$maxWidth}px;
    `}
`;

export const TitleContainer = styled.div`
  margin-bottom: 32px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${theme.text};
`;

export const TableHeader = styled.thead``;

export const TableBody = styled.tbody``;

const Th = styled.th<{ align?: TextAlign }>`
  border: 1px solid ${theme.primary};
  border-width: 1px 0 1px 0;
  padding: 10px;
  text-align: ${({ align = 'left' }) => align};
  vertical-align: middle;
`;

const Td = styled.td<{ align?: TextAlign }>`
  border-bottom: 1px solid ${theme.primary};
  vertical-align: top;
  padding: 20px 10px;
  text-align: ${({ align = 'left' }) => align};
  vertical-align: middle;
`;

export const TableColumn = ({
  isHeader,
  align = 'left',
  children,
}: {
  isHeader?: boolean;
  align?: TextAlign;
  children: ReactNode;
}) => (isHeader ? <Th align={align}>{children}</Th> : <Td align={align}>{children}</Td>);

export const TableRow = styled.tr``;
