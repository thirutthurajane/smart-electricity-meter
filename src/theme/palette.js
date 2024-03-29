import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

function createGradient (color1, color2) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
// https://colors.eva.design/
// lighter = 100
// light = 400
// main = 500
// dark = 600
// darker = 900
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#919EAB', 0.08),
  500_12: alpha('#919EAB', 0.12),
  500_16: alpha('#919EAB', 0.16),
  500_24: alpha('#919EAB', 0.24),
  500_32: alpha('#919EAB', 0.32),
  500_48: alpha('#919EAB', 0.48),
  500_56: alpha('#919EAB', 0.56),
  500_80: alpha('#919EAB', 0.8),
};

const PRIMARY = {
  lighter: '#D6E4FF',
  light: '#84A9FF',
  main: '#3366FF',
  dark: '#1939B7',
  darker: '#091A7A',
  contrastText: '#fff',
  text: '#404552',
};
const NAVBUTTON = {
  lighter: '#FAFDFE',
  light: '#EBF3FA',
  main: '#E3EDF7',
  dark: '#A5BAD4',
  darker: '#48618F',
  contrastText: '#fff',
  text: '#404552',
};
const ACCENT = {
  lighter: '#C8FBE8',
  light: '#34D0BF',
  main: '#00B1AE',
  dark: '#018280',
  darker: '#005978',
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#C8FACD',
  light: '#5BE584',
  main: '#00AB55',
  dark: '#007B55',
  darker: '#005249',
  contrastText: '#fff',
};
const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
};
const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: '#FFF',
};
const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
};
const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
};

const NORMAL_BUTTON = {
  lighter: '#E2EFF8',
  light: '#7794B5',
  main: '#486284',
  dark: '#344C71',
  darker: '#0D1A3F',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  accent: { ...ACCENT },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  navbutton: { ...NAVBUTTON },
  normalbutton: { ...NORMAL_BUTTON }
};

export default palette;
