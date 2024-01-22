import { Header } from "./components/Header";
import { Noticia } from "./pages/Noticia";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Noticia />
    </Router>
  );
}

export default App;
