export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[keyof T];
export type UnitMap<T extends string | number | symbol, K = any> = {
  [key in T]: K;
};

export type DefaultProps<
  C,
  Removals extends keyof React.HTMLProps<C> = never,
> = React.AriaAttributes & Omit<React.HTMLProps<C>, 'as' | 'ref' | Removals> & { sx?: SX };

export type KeysOfUnion<T> = T extends T ? keyof T : never;
