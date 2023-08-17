import { useEffect, useRef, RefObject } from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation();
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
                <Link className='brand' to="/">
                    <div className="brand-logo">logo</div>
                    <div className='brand-name'>Sentir es existir</div>
                </Link>
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}><Link className='underline' to="/">Inicio</Link></li>
                    <li className={location.pathname === "/comunidad" ? "active" : ""}><Link className='underline' to="/comunidad">Comunidad</Link></li>
                    <li className={location.pathname === "/nosotros" ? "active" : ""}><Link className='underline' to="/nosotros">Nosotros</Link></li>
                    <li className={location.pathname === "/contacto" ? "active" : ""}><Link className='underline' to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </div>
    )
}
