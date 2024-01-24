import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Noticia from './pages/Noticia/Noticia';
import Portal from './pages/Portal/Portal';

function App() {
  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portal />} />
        <Route path="/serie/:id/" element={<Noticia />} />
      </Routes>
    </>
  );
}

export default App;
