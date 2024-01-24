import { useState } from 'react';
import logoImg from '../assets/Vector.svg';
import BarraPesquisa from './BarraPesquisa';

import { Link, NavLink } from 'react-router-dom';

import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <div className="nav-brand">
          <img src={logoImg} alt="" />
          <h1>NEWSERIES</h1>
        </div>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to="/">Pagina Inicial</NavLink>
        </li>

        <li>
          <NavLink to="/nacional">Séries Nacionais</NavLink>
        </li>
        
        <li>
          <NavLink to="/internacional">Séries Internacionais</NavLink>
        </li>
      </ul>
      <BarraPesquisa />
    </nav>
  );
};
