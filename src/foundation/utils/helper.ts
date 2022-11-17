export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[keyof T];
export type UnitMap<T extends string | number | symbol, K = any> = {
  [key in T]: K;
};

export type KeysOfUnion<T> = T extends T ? keyof T : never;
