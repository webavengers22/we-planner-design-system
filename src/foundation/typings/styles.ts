import { FlattenInterpolation, ThemedStyledProps } from 'styled-components';
type StyledCss<Props extends { [key: string]: any } = Record<string, any>> = FlattenInterpolation<
  ThemedStyledProps<Props, any>
>;

export type { StyledCss };
