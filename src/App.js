import { createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { HOME } from './pages/routes';

const theme = createTheme({
  palette: {
    primary: { main: '#0000CC' },
    secondary: { main: '#F5F5F5' }
  },
  overrides: {
    MuiInputBase: {
      input: {
        color: '#666666'
      }
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route exact path={'/'} element={<Home/>} />
          <Route path={HOME} element={<Home/>} />
        </Routes>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
