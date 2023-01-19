import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { useColorTheme } from '../../src/contexts/ThemeContext';

export function ThemeSwitcher() {
  const isDarkMode = useDarkMode();
  const { setColorTheme } = useColorTheme();

  useEffect(() => {
    console.log('ThemeSwitcher');
    setColorTheme(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return '';
}
