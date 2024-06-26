import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { searchProduct, clearProducts, productsFetching } from '../slice/catalogSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const [search, setSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    const { offset, productSearch, viewProductCategory } = useSelector(state => state.catalog);

    useEffect(() => {
        setActivePath(location.pathname);
    }, [location.pathname]);

    function handleClick(path) {
        if(search) setSearch(!search);
        dispatch(searchProduct(''));
        dispatch(clearProducts());
        dispatch(productsFetching(offset, productSearch, viewProductCategory));
        setActivePath(path);
        navigate(path);
    }

    function searchProcess() {
        
        if(searchQuery.trim() !== '') {
            dispatch(searchProduct(searchQuery))
            setSearch(!search);
            setSearchQuery('');
            dispatch(clearProducts());
            dispatch(productsFetching(offset, productSearch, viewProductCategory));
            navigate('/catalog.html');
        };

        setSearch(!search);

    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();

        searchProcess();
    }
    
    const openSearch = () => {
        searchProcess();  
    }

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };
        
    return (

        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">
                        <a className="navbar-brand" onClick={() => handleClick('/')}>
                            <img src="/public/img/header-logo.png" alt="Bosa Noga" />
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
                                    <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={() => openSearch()}></div>
                                    <Link to="/cart.html">
                                        <div className="header-controls-pic header-controls-cart">
                                            {localStorage.length > 0 ? <div className="header-controls-cart-full">{localStorage.length}</div> : null} 
                                        </div>
                                    </Link>    
                                </div>
                                <form 
                                    data-id="search-form" 
                                    className={`header-controls-search-form form-inline ${search ? "" : "invisible"}`}
                                    onSubmit={handleSearchSubmit}
                                >
                                    <input 
                                        className="form-control"
                                        placeholder="Поиск"
                                        value={searchQuery}
                                        onChange={handleSearchChange} 
                                    />
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
