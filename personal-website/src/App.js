import logo from './logo.svg';
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
  color:{
    primary: '#d9faf5',
    secondary: '#39b8bd'
  }
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
