const brandColors = ['primary', 'secondary'] as const;
export type RadioColorType = (typeof brandColors)[number];
