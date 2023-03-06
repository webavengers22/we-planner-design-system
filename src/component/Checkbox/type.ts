const brandColors = ['primary', 'secondary', 'on'] as const;
const checkBoxColors = [...brandColors] as const;
export type CheckBoxColorType = (typeof checkBoxColors)[number];
