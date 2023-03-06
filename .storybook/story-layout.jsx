import React, { useEffect, useState } from 'react';
import { useGlobalTheme } from './theming';
import Navbar from '../src/component/Navbar';
import Theme from '../src/component/Theme';

const StoryLayout = ({ children, title, description, source }) => {
  const [tab, setTab] = useState('preview');
  const globalTheme = useGlobalTheme();

  useEffect(() => {
    document
      .getElementsByTagName('html')[0]
      .setAttribute('data-theme', globalTheme);
  }, [globalTheme]);

  return (
    <Theme dataTheme={globalTheme} className="w-full h-screen p-8 bg-base-100">
      <Navbar className="p-0 border-b border-neutral text-base-content">
        <Navbar.Start>
          <span className="text-lg font-bold">위플래너</span>
        </Navbar.Start>
      </Navbar>

      <div className="w-full h-full my-4">
        <h1 className="text-4xl text-base-content font-bold">{title}</h1>
        <p className="text-base-content">{description}</p>
        <div className="my-4">
          {/* Mobile view */}
          <div className="block sm:hidden">{children}</div>

          {/* Desktop view */}
          <div className="hidden sm:grid">
            <div className="rounded-b-box rounded-tr-box relative overflow-x-auto">
              <div
                className="preview border-base-300 bg-base-200 rounded-b-box rounded-tr-box
                            flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2
                            overflow-x-hidden overflow-y-hidden border bg-cover bg-top p-4"
                style={{ backgroundSize: '5px 5px' }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Theme>
  );
};

export default StoryLayout;
