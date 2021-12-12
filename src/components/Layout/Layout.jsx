import { Outlet, NavLink } from "react-router-dom";
import './Layout.scss';

const Layout = () => {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <nav>
                        <ul className='header__list'>
                            <li className='header__item'>
                                <NavLink className='header__link' to="/">Home</NavLink>
                            </li>
                            <li className='header__item'>
                                <NavLink className='header__link' to="/todos">Todos</NavLink>
                            </li>
                            <li className='header__item'>
                                <NavLink className='header__link' to="/favorite">Favorite</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="container">
                <Outlet />
            </div>

            <footer className='footer'>
                <div className="container">
                    2<span className='footer__number'>0</span>2<span className='footer__number'>1</span>
                </div>
            </footer>
        </>
    )
}

export default Layout;
