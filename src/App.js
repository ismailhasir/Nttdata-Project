import { CssBaseline } from '@mui/material';
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import Layout from './components/layout/Layout';
import { BasketProvider } from './contexts/BasketContext';
import theme from './theme';


function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme(theme)}>
        <CssBaseline />
        <BasketProvider>
          <Layout />
        </BasketProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
