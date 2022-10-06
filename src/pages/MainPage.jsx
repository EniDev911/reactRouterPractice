import {Link, Outlet } from 'react-router-dom';

export const MainPage = () => (
    <>
    <nav>
        <ul>
            <li>
                <Link to="/one">Página uno</Link>
            </li>
            <li>
                <Link to="/two">Página dos</Link>
            </li>
        </ul>
    </nav>
    <hr />
    <Outlet/>
    </>
)