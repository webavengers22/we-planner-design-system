export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: React.CSSProperties['alignItems'];
  direction?: React.CSSProperties['flexDirection'];
  justify?: React.CSSProperties['justifyContent'];
  wrap?: React.CSSProperties['flexWrap'];
  gap?: string;
  width?: string;
  height?: string;
}
