import { useEffect, useRef, RefObject } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
    const navbarRef: RefObject<HTMLDivElement> = useRef(null);
    useEffect(() => {
        const changeNavbarColor = () => {
            if (!navbarRef.current) return;
            const navbar = navbarRef.current;
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
                return;
            }
            navbar.classList.remove("scrolled");
        }
        window.addEventListener("scroll", changeNavbarColor);
        return () => {
            window.removeEventListener("scroll", changeNavbarColor);
        }
    }, [window.scrollY]);
    return (
        <div>
            <div ref={navbarRef} className="navbar-2">
                <div className='brand'>
                    <div className="brand-logo">logo</div>
                    <div className='brand-name'>Sentir es existir</div>
                </div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/comunidad">Comunidad</Link></li>
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}
