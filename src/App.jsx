import { ThemeProvider, useTheme } from "@emotion/react";
import Topbar from "./components/global/Topbar";
import { CssBaseline, createTheme } from "@mui/material";
import { Balcony } from "@mui/icons-material";

function App() {
  const theme = createTheme({
    palette: {
      main: {
        primary: "red",
      },
      background: { default: "black" },
    },
  });
  // const [theme] = useTheme();
  // console.log(theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Topbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
