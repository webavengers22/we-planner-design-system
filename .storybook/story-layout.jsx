import React, { useEffect, useState } from 'react';
import { useGlobalTheme } from './theming';
import { WePlanWrapper } from '../src/component/wrapper';
import { useColorTheme } from '../src/contexts/themeContext';

const Link = React.forwardRef((props, ref) => {
  return (
    <a href={props?.to} ref={ref} {...props}>
      {props.children}
    </a>
  );
});
const StoryLayout = ({ children }) => {
  const [tab, setTab] = useState('preview');
  const globalTheme = useGlobalTheme();
  const { setColorTheme } = useColorTheme();
  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', globalTheme);
    setColorTheme(globalTheme);
  }, [globalTheme]);

  return <WePlanWrapper initLink={Link}>{children}</WePlanWrapper>;
};

export default StoryLayout;
