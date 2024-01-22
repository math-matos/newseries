import { Link } from 'react-router-dom';
import logoImg from '../assets/Vector.svg';

interface Props {}

export const Header: React.FC = (props: Props) => {
    return (
        <>
        <header>
            <nav id='navbar'>
                <Link to="/">
                    <div className="nav-brand">
                        <img src={logoImg} alt="" />
                        <h1>NEWSERIES</h1>
                    </div>
                </Link>

                <ul className="nav-list">
                    <li><Link to="/">Séries Nacionais</Link></li>
                    <li><Link to="/noticias">Séries Internacionais</Link></li>
                </ul>
            </nav>
        </header>
        </>
        
    );
}
