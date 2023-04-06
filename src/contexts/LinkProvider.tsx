import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useContext,
} from 'react';

export interface LinkContextProps {
  Link?: React.ElementType<any>;
  setLink: (Link: React.ElementType<any>) => void;
}
const LinkContext = createContext<LinkContextProps>({
  Link: undefined,
  setLink: () => null,
});
export function LinkProvider({
  children,
  initLink,
}: {
  children: React.ReactNode;
  initLink?: React.ElementType<any>;
}) {
  const [Link, setLink] = useState<React.ElementType<any>>();

  useEffect(() => {
    if (initLink) {
      setLink(initLink);
    }
  }, [initLink]);

  const value = useMemo(
    () => ({
      Link,
      setLink,
    }),
    [Link],
  );

  return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>;
}

export const useLinkContext = () => useContext(LinkContext);
