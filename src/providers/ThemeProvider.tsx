import ColorThemeProvider from 'hooks/useColorTheme';
import type { ChildrenProps } from 'types/ComponentProps';
export interface ThemeProviderProps extends ChildrenProps {}
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ColorThemeProvider>{children}</ColorThemeProvider>;
};

export default ThemeProvider;
