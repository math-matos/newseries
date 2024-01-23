import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";
import Portal from "./pages/Portal/Portal.tsx";
import { Noticia } from "./pages/Noticia/Noticia.tsx";
import { Search } from "./pages/Search/Search.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Portal />}/>
          <Route path="/noticia" element={<Noticia />}/>
          <Route path="search" element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
