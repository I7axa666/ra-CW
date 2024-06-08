import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from "react-router-dom"
import { categoriesFetching, productsFetching, changeOffset } from "../slice/catalogSlice"
import Categories from "./Categories"
import MainPageCatalog from "./MainPageCatalog"

const Catalog = ()  =>  {
    const dispatch = useDispatch();
    const location = useLocation();
    const {
        products,
        categories, 
        errorCategories,
        viewProductCategory,
        offset, 
    } = useSelector(state => state.catalog);

    useEffect(() => {
        dispatch(categoriesFetching());
    }, [dispatch]);

    useEffect(() => {
        dispatch(productsFetching({offset, viewProductCategory}));
    }, [dispatch, offset, viewProductCategory]);

    const handleClick = () => {

        dispatch(changeOffset(offset + 6));
    };

    return (                    
    <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        {location.pathname === '/catalog.html' ?
            <form class="catalog-search-form form-inline">
                <input class="form-control" placeholder="Поиск" />
            </form> : 
            <></>
        }
       
        <div className="preloader"></div>
        {errorCategories && <p>{errorCategories}</p>}
        {categories && <Categories list={categories} />}
        <MainPageCatalog />
        {!products || products.length < 6 ? <></> :
        <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleClick}>Загрузить ещё</button>
        </div>}
    </section>
    )
}

export default Catalog
