import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'animate.css';

const outerTheme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={outerTheme}>

      <Component {...pageProps} />
 
    </ThemeProvider>
    
  )
}

export default MyApp
