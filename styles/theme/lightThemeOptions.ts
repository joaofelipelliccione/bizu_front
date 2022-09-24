import { ThemeOptions } from '@mui/material/styles';

// REF: https://bareynol.github.io/mui-theme-creator/
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#f3f3e9',
    },
    secondary: {
      main: '#c7cfb7',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    background: {
      default: '#f1f1f1',
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
};

export default lightThemeOptions;
