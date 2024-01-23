import logoImg from '../assets/Vector.svg';
import BarraPesquisa from './BarraPesquisa';

import { Link } from 'react-router-dom';

import './Header.css';

interface Props {}

export const Header: React.FC = (props: Props) => {
  return (
    <>
      <header>
        <nav id="navbar">
          <div className="nav-container">
          <Link to='/'><div className="nav-brand">
              <img src={logoImg} alt="" />
              <h1>NEWSERIES</h1>
            </div> </Link>
            <ul className="nav-list">
              <li>
              <Link to='/coloque-seu-texto'>Séries Nacionais</Link>
              </li>
              <li>
              <Link to='/noticia'>Séries Internacionais</Link>
              </li>
            </ul>
          </div>
          <BarraPesquisa />
        </nav>
      </header>
    </>
  );
};

