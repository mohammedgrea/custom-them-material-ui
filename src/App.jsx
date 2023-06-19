import { ThemeProvider, useTheme } from "@emotion/react";
import Topbar from "./components/global/Topbar";
import { CssBaseline } from "@mui/material";
import { ColorThemContext, useMode } from "../theme";

function App() {
  const [theme, colorMode] = useMode();
  console.log(theme);

  return (
    <ColorThemContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Topbar />
        </div>
      </ThemeProvider>
    </ColorThemContext.Provider>
  );
}

export default App;
