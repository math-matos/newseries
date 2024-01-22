import logoImg from '../assets/Vector.svg';

interface Props {}

export const Header: React.FC = (props: Props) => {
    return (
        <>
        <header>
            <nav id='navbar'>
                
                    <div className="nav-brand">
                        <img src={logoImg} alt="" />
                        <h1>NEWSERIES</h1>
                    </div>
                

                <ul className="nav-list">
                    <li><a href="#">Séries Nacionais</a></li>
                    <li><a href="#">Séries Internacionais</a></li>
                </ul>
            </nav>
        </header>
        </>
        
    );
}
