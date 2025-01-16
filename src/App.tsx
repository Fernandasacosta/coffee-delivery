
import { BrowserRouter } from "react-router";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
// import { GlobalStyle } from "./styles/themes/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    {/* <GlobalStyle /> */}
    </ThemeProvider>
    
  );
}

export default App
