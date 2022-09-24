import { ThemeOptions } from '@mui/material/styles';

// REF: https://bareynol.github.io/mui-theme-creator/
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#c7cfb7',
    },
    secondary: {
      main: '#f3f3e9',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    background: {
      default: '#e2e1e1',
      paper: '#ffffff',
    },
    error: {
      main: '#ec4033',
    },
    warning: {
      main: '#f19207',
    },
    info: {
      main: '#178fef',
    },
    success: {
      main: '#4bad4e',
    },
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
};

export default lightThemeOptions;
