import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/services">Serviços</Link></li>
                    <li><Link to="">Contato</Link></li>
                </ul>
            </nav>
        </>
     );
}

export default Nav;