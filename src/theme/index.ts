import { darkPalette, lightPalette, standardPalette } from './colorPalettes';

const getAppTheme = (mode: 'light' | 'dark') => {
  const isDark = mode === 'dark';
  return {
    palette: {
      mode,
      ...(isDark ? darkPalette : lightPalette),
      ...standardPalette,
    },
  };
};

export { getAppTheme };
