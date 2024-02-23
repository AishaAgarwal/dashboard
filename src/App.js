import { colourModeContext , useMode} from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from './scenes/global/topbar';
import Dashboard from "./scenes/dashboard";
import { Routes, Route} from "react-router-dom";
import Side from "./scenes/global/sidebar";

function App() {
  const [theme, colorMode] = useMode();
  return (<colourModeContext.Provider value={colorMode}>
   
     <ThemeProvider theme={theme}>
      <CssBaseline/>
      
      <div className="app"> 
     
     
     
        <main className="content">
          <Topbar/>
            <Side/>
          <Routes>
            <Route path = "/" element = {<Dashboard/>}></Route>
          </Routes>
        </main>
      </div>
     </ThemeProvider>
     
  </colourModeContext.Provider>
    
  );
}

export default App;
