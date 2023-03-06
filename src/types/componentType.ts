import {
  DEFAULT_THEMES,
  componentStatuses,
  componentColors,
  componentPositions,
  CommSizes,
  componentShapes,
  bgColors,
  brandColors,
} from '../contrants';

export type DataTheme = (typeof DEFAULT_THEMES)[number] | string;

export type ComponentColor = (typeof componentColors)[number];

export type ComponentPosition = (typeof componentPositions)[number];
export type ComponentShape = (typeof componentShapes)[number];
export type CommSize = (typeof CommSizes)[number];
export type ComponentStatus = (typeof componentStatuses)[number];
export type ComponentBrandColors = (typeof brandColors)[number];
export type ComponentBgColors = (typeof bgColors)[number];
