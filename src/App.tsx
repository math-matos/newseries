import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Noticia from './pages/Noticia/Noticia';
import Portal from './pages/Portal/Portal';
import { Search } from './pages/Search/Search';

function App() {
  return (
    <>
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Portal />} />
        <Route path="/serie/:id/" element={<Noticia />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
