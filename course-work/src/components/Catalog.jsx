import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Outlet, useLocation } from "react-router-dom"
import { categoriesFetching, productsFetching, changeOffset, searchProduct, clearProducts } from "../slice/catalogSlice"
import Categories from "./Categories"
import MainPageCatalog from "./MainPageCatalog"

const Catalog = ()  =>  {
    const dispatch = useDispatch();
    const location = useLocation();
    const {
        products,
        productSearch,
        categories, 
        errorCategories,
        viewProductCategory,
        offset,
        isLoadingProducts,
        productsCatalog, 
    } = useSelector(state => state.catalog);

    useEffect(() => {
        dispatch(categoriesFetching());
    }, [dispatch]);

    useEffect(() => {
        dispatch(productsFetching({offset, viewProductCategory, productSearch}));
    }, [dispatch, offset, viewProductCategory]);

    const handleClick = () => {
        dispatch(changeOffset(offset + 6));
    };

    const onChange = (event) => {
        dispatch(searchProduct(event.target.value));
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        dispatch(clearProducts());
        dispatch(productsFetching({offset, viewProductCategory, productSearch}));
    };

    return (
        <>

                 
                <section className="catalog">
                    <h2 className="text-center">Каталог</h2>
                    {location.pathname === '/catalog.html' ?
                        <form className="catalog-search-form form-inline" onSubmit={handleSearchSubmit}>
                            <input
                                className="form-control"
                                value={productSearch}
                                placeholder="Поиск"
                                onChange={onChange} 
                            />
                        </form> : 
                        <></>
                    }
                
                    {errorCategories && <></>}
                    {categories && <Categories list={categories} />}
                    {productsCatalog.length > 0 && (<MainPageCatalog />)}
                    {isLoadingProducts && (
                        <div className="preloader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    )}


                    {!products || products.length < 6 ? <></> :
                    <div className="text-center">
                        <button className="btn btn-outline-primary" onClick={handleClick}>Загрузить ещё</button>
                    </div>}
                </section>
            
        </>
    )
}

export default Catalog
