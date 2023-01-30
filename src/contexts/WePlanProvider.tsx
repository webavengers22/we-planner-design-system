import { Theme } from '@/types';
import ThemeProvider from './ThemeProvider';

interface Props {
  initialTheme?: Theme;
  children: React.ReactNode;
}

export function WePlanProvider({ children, initialTheme }: Props) {
  return <ThemeProvider initialTheme={initialTheme}>{children}</ThemeProvider>;
}
