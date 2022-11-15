import { FontsVariables, fontVariable, FontsKey, FontsType } from '../fonts';
import { cssVar } from 'util/index';

// TODO: font 저장
const buildfontVariable = (variables: FontsVariables) => {
  const keys = Object.keys(variables) as (keyof FontsVariables)[];
  return keys.reduce(
    (acc, key) => acc.concat(`--${key.replace(/_/g, '-')}: ${variables[key]};`, '\n'),
    '',
  );
};

export const builtfontVariable = buildfontVariable(fontVariable);

const variableKeys = Object.keys(fontVariable) as FontsKey[];

export const fontPalette: Record<FontsKey, string> = variableKeys.reduce((acc, current) => {
  acc[current] = cssVar(current);
  return acc;
}, {} as FontsType);
