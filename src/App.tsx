import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Noticia } from "./pages/Noticia/Noticia";
import Portal from "./pages/Portal/Portal";

function App() {
  return (
    <>
      <Header />
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
