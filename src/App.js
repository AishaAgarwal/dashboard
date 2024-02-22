import { colourModeContext , useMode} from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/topbar';

function App() {
  const [theme, colorMode] = useMode();
  return (<colourModeContext.Provider value={colorMode}>
   
     <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app"> 
        <main className="content">
          <Topbar/>
        </main>
      </div>
     </ThemeProvider>
     
  </colourModeContext.Provider>
    
  );
}

export default App;
