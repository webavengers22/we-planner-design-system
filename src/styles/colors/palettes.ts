import { color } from './colors';
import { ThemeGroup } from './type';
const light: ThemeGroup = {
  background: {
    default: color.common.white,
    paper: color.common.white,
  },
  text: {
    primary: color.gray[900],
    secondary: color.gray[700],
  },
};

const dark: ThemeGroup = {
  background: {
    default: color.gray[900],
    paper: color.gray[800],
  },
  text: {
    primary: color.common.white,
    secondary: color.gray[200],
  },
};

export { light, dark };
