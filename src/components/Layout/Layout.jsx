import { Outlet, NavLink } from "react-router-dom";
import './Layout.scss';

const Layout = () => {
    return (
        <>
            <header className='header'>
                <NavLink className='header__link' to="/">Home</NavLink>
                <NavLink className='header__link' to="/todos">Todos</NavLink>
                <NavLink className='header__link' to="/about">About</NavLink>
            </header>

            <div className="main">
                <Outlet />
            </div>

            <footer>2021</footer>
        </>
    )
}

export default Layout;
