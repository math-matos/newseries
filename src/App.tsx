import { Route, Routes } from "react-router-dom";
/* import { Header } from "./components/Navbar"; */
import { Noticia } from "./pages/Noticia/Noticia";
import Portal from "./pages/Portal/Portal";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      {/* <Header /> */}
      <Routes>
        <Route path="/noticia" element={<Noticia />} />
        <Route path="/" element={<Portal />} />
      </Routes>

      {/* <Noticia /> */}
      {/* <Portal /> */}
    </>
  );
}

export default App;
