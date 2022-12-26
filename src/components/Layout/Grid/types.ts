export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  align?: React.CSSProperties['alignItems'];
  justify?: React.CSSProperties['justifyContent'];
  flow?: React.CSSProperties['gridAutoFlow'];
  columns?: number;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
}
