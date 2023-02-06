import React, { useEffect } from 'react';
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode';
import { useColorTheme } from '@/contexts/ThemeContext';
import { addons } from '@storybook/preview-api';

const channel = addons.getChannel();

interface Props {
  children: React.ReactNode;
}

function StorybookThemeWrapper({ children }: Props) {
  const { setTheme } = useColorTheme();

  useEffect(() => {
    const updater = (value: boolean) => setTheme(value ? 'dark' : 'light');

    channel.on(DARK_MODE_EVENT_NAME, updater);
    // Clean up.
    return () => channel.off(DARK_MODE_EVENT_NAME, updater);
  }, []);

  return <>{children}</>;
}

export default StorybookThemeWrapper;
