import { componentStatuses } from '.';
export const brandColors = ['primary', 'secondary', 'off', 'accent'] as const;

export const componentColors = [
  ...brandColors,
  // ...componentStatuses,
] as const;

export const bgColors = [
  'bg-orange-100',
  'bg-orange-200',
  'bg-orange-300',
] as const;
