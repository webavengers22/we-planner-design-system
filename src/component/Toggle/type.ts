const brandColors = ['primary', 'secondary'] as const;
export type ToggleColorType = (typeof brandColors)[number];
