import { useEffect, useRef, RefObject, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation();
    const navbarRef: RefObject<HTMLDivElement> = useRef(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [headerColor, setHaderColor] = useState<string>("");
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
    useEffect(() => {
        window.scrollTo(0, 0);
        if(location.pathname === "/comunidad") {
            setHaderColor("navbar-alt");
        } else {
            setHaderColor("");
        }
    }, [location.pathname]);
    return (
        <div>
            <div ref={navbarRef} className={`navbar-container ${headerColor}`}>
                <div className='brand'>
                    <Link className="brand-logo" to="/"><img src="./assets/icon/icon.png" alt="" /></Link>
                    <Link className="brand-name" to="/">Sentir es existir</Link>
                </div>
                <ul className='nav-desktop'>
                    <li className={location.pathname === "/" ? "active" : ""}><Link className='underline-anim' to="/">Inicio</Link></li>
                    <li className={location.pathname === "/comunidad" ? "active" : ""}><Link className='underline-anim' to="/comunidad">Comunidad</Link></li>
                    <li className={location.pathname === "/nosotros" ? "active" : ""}><Link className='underline-anim' to="/nosotros">Historia</Link></li>
                    <li ><a className='underline-anim' href='#footer'>Contacto</a></li>
                </ul>
                <div className="nav-mobile">
                    <div onClick={() => setVisible(!visible)} className={`hamburger ${visible ? "hamburger-active" : ""}`}>
                        <div className={`bar ${visible ? "bar-active" : ""}`}></div>
                    </div>
                    <aside className={`sidebar ${visible ? "sidebar-visible" : ""}`}>
                        <nav className='navbar-mobile'>
                            <div className='brand'>
                                <Link className="brand-logo" to="/"><img src="./assets/icon/icon.png" alt="" /></Link>
                                <Link className='brand-name' to="/">Sentir es existir</Link>
                            </div>
                            <ul>
                                <li className={location.pathname === "/" ? "active" : ""}>
                                    <Link onClick={() => setVisible(false)} className='underline-anim' to="/">Inicio</Link>
                                </li>
                                <li className={location.pathname === "/comunidad" ? "active" : ""}>
                                    <Link onClick={() => setVisible(false)} className='underline-anim' to="/comunidad">Comunidad</Link>
                                </li>
                                <li className={location.pathname === "/nosotros" ? "active" : ""}>
                                    <Link onClick={() => setVisible(false)} className='underline-anim' to="/nosotros">Historia</Link>
                                </li>
                                <li >
                                    <a onClick={() => setVisible(false)} className='underline-anim' href='#footer'>Contacto</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        </div>
    )
}
