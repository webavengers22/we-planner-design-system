import { KeysOfUnion } from './helper';
import { cssVar } from './styled';

const buildCssVariables = <T extends Object>(variables: T): string => {
  const keys = Object.keys(variables) as KeysOfUnion<T>[];
  return keys.reduce(
    (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
    '',
  );
};

const buildColorPalette = <T extends Object>(variables: T) => {
  const keys = Object.keys(variables) as KeysOfUnion<T>[];
  return keys.reduce((acc, current) => {
    acc[current] = cssVar(current);
    return acc;
  }, {} as Record<KeysOfUnion<T>, string>);
};

export { buildCssVariables, buildColorPalette };
