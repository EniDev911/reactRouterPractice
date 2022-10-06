import {Link, Outlet } from 'react-router-dom';

export const MainPage = () => (
    <>
    <nav>
        <ul>
            <li>
                <Link to="one">Página uno</Link> - {' '}
                <Link to="one/1">Párrafo 1</Link> - {' '}
                <Link to="one/2">Párrafo 2</Link>
            </li>
            <li>
                <Link to="two">Página dos</Link> - {' '}
                <Link to="two/1">Párrafo 1</Link> - {' '}
                <Link to="two/2">Párrafo 2</Link>
            </li>
        </ul>
    </nav>
    <hr />
    <Outlet/>
    </>
)