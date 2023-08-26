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
                    <li className={location.pathname === "/" ? "active" : ""}><Link className='underline-anim' to="/">Inicio</Link></li>
                    <li className={location.pathname === "/comunidad" ? "active" : ""}><Link className='underline-anim' to="/comunidad">Comunidad</Link></li>
                    <li className={location.pathname === "/nosotros" ? "active" : ""}><Link className='underline-anim' to="/nosotros">Nosotros</Link></li>
                    <li ><a className='underline-anim' href='#footer'>Contacto</a></li>
                </ul>
            </div>
        </div>
    )
}
