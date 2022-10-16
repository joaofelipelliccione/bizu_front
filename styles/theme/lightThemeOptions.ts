import { ThemeOptions } from '@mui/material/styles';

// REF: https://bareynol.github.io/mui-theme-creator/
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#496874',
    },
    secondary: {
      main: '#21DF7F',
    },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    background: {
      default: '#E5E5E5',
      paper: '#E1E1E1',
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
    h1: {
      fontWeight: 400,
      '@media (min-width:0px)': {
        fontSize: '1.5rem',
      },
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '2.7rem',
      },
    },
    h2: {
      fontWeight: 400,
      '@media (min-width:0px)': {
        fontSize: '1rem',
      },
      '@media (min-width:600px)': {
        fontSize: '1.1rem',
      },
      '@media (min-width:900px)': {
        fontSize: '1.2rem',
      },
      '@media (min-width:1200px)': {
        fontSize: '1.3rem',
      },
    },
    button: { textTransform: 'none' },
  },
};

export default lightThemeOptions;
