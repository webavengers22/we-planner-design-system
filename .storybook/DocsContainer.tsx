import React from 'react';
import addons from '@storybook/addons';
import { DocsContainer as BaseContainer } from '@storybook/addon-docs';
import { darkTheme, lightTheme } from './theme';
import { themes } from '@storybook/theming';
import { DARK_MODE_EVENT_NAME, UPDATE_DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

export const DocsContainer = ({ children, context }) => {
  const [isDark, setDark] = React.useState();

  const onChangeHandler = () => {
    channel.emit(UPDATE_DARK_MODE_EVENT_NAME);
  };

  React.useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);
  return (
    <BaseContainer
      context={{
        ...context,
        storyById: (id) => {
          const storyContext = context.storyById(id);
          return {
            ...storyContext,
            parameters: {
              ...storyContext?.parameters,
              docs: {
                ...storyContext?.parameters?.docs,
                theme: dark ? darkTheme : lightTheme,
              },
            },
          };
        },
      }}
    >
      {children}
    </BaseContainer>
  );
};
