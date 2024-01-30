import { Route, Routes } from "react-router-dom";
import { Noticia } from "./pages/Noticia/Noticia";
import Portal from "./pages/Portal/Portal";
import { Navbar } from "./components/Navbar";
import Lista from "./pages/Lista/Lista";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./themes/Theme";
import { responsiveFontSizes } from "@mui/material";

function App() {
  const theme = responsiveFontSizes(Theme);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Portal />} />
          <Route path="/serie/:id" element={<Noticia />} />
          <Route path="/avaliacao" element={<Lista />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
