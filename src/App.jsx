import Dashboard from './componets/Dashboard'
import './App.css'
import Header from './componets/Header'
import { Container } from '@material-ui/core'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createTheme({
  typography: {
    fontFamily: "IBM Plex Sans, sans-serif",
  },
});


function App() {

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header/>
    <Dashboard/> 
    </ThemeProvider>
  
 
  )
}

export default App
