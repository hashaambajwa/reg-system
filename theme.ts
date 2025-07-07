import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#9E69FD',
      main: '#9155FD',
      dark: '#804BDF',
      contrastText: '#fff',
    },
    secondary: {
      light: '#9C9FA4',
      main: '#8A8D93',
      dark: '#777B82',
      contrastText: '#fff',
    },
    background: {
      default: '#F4F5FA',
      paper: '#fff',
    },
  },
  shape: { borderRadius: 6 },
});

export default theme;
