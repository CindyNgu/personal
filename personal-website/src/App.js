import './App.css';
// import HomePage from './UI/HomePage';
import PortfolioHome from './Pages/PortfolioHome';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {Box, createTheme, ThemeProvider} from '@mui/material';

const THEME = createTheme({
  marginX:{
    marginLeft: '1em',
    marginRight: '1em'
  },
  typography:{
    h1: {
      fontFamily: "Open Sans"
    },
    h2: {
      fontFamily: "Arial"
    },
    h3: {
      fontFamily: "Times New Roman"
    },
    h4: {
      fontFamily: "verdana"
    },
    button: {
      fontFamily: "verdana"
    }
  },
  color:{
    primary: '#F8EDE3',
    secondary: '#A2B29F',
    tertiary: '#BDD2B6',
    quaternary: '#798777'
  },
  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 1000,
  //     lg: 2000,
  //     xl: 3500,
  //   },
  // },
})


function App() {
  return (
    <Box sx={{minHeight: '100vh', height: '100%', backgroundColor: THEME.color.primary}}>
      <BrowserRouter>
        <ThemeProvider theme={THEME}>
          <Routes/>
        </ThemeProvider>
      </BrowserRouter>
    </Box>
  );
}

export default App;
