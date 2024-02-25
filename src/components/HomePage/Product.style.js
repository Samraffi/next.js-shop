import { createTheme, styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import Paper from '@mui/material/Paper';

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: grey
  }
});

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
