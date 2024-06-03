import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);

    function handleClick(path) {
        setActivePath(path);
        navigate(path);
    }    
        
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <a className="navbar-brand" onClick={() => handleClick('/')}>
                            <img src="./img/header-logo.png" alt="Bosa Noga" />
                        </a>
                        <div className="collapse navbar-collapse" id="navbarMain">
                            <ul className="navbar-nav mr-auto">
                                <li className={`nav-item ${activePath === '/' ? 'active' : ''}`}>
                                    <a className="nav-link" onClick={() => handleClick('/')}>Главная</a>
                                </li>
                                <li className={`nav-item ${activePath === '/catalog.html' ? 'active' : ''}`}>
                                    <a className="nav-link" onClick={() => handleClick('/catalog.html')}>Каталог</a>
                                </li>
                                <li className={`nav-item ${activePath === '/about.html' ? 'active' : ''}`}>
                                    <a className="nav-link" onClick={() => handleClick('/about.html')}>О магазине</a>
                                </li>
                                <li className={`nav-item ${activePath === '/contacts.html' ? 'active' : ''}`}>
                                    <a className="nav-link" onClick={() => handleClick('/contacts.html')}>Контакты</a>
                                </li>
                            </ul>
                            <div>
                                <div className="header-controls-pics">
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                                    {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                                    <div className="header-controls-pic header-controls-cart">
                                        {/* <div className="header-controls-cart-full">1</div> */}
                                        <div className="header-controls-cart-menu"></div>
                                    </div>
                                </div>
                                <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                                    <input className="form-control" placeholder="Поиск" />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>       

    )
};

export default Header;