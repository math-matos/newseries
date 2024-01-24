import { Route, Routes } from "react-router-dom";
import Noticia from "./pages/Noticia/Noticia";
import Portal from "./pages/Portal/Portal";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portal />} />
        <Route path="/serie/:id" element={<Noticia />} />
      </Routes>
    </>
  );
}

export default App;