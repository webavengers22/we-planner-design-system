export const cssVar = (name: string) => `var(--${name.replace(/-/g, '-')})`;

export function isCSSVariable(value: string) {
  return value.startsWith('var(');
}

export function safelyAlterColor(
  value: string,
  alter: (color: string) => string,
) {
  if (isCSSVariable(value)) {
    return value;
  }
  return alter(value);
}

export function getCSSVarValue(name: string) {
  if (typeof window === 'undefined') return '';
  // unwrap var()
  const style = getComputedStyle(document.body);
  const parsed = name.replace(/var\((--[^)]+)\)/, '$1');
  return style.getPropertyValue(parsed);
}
