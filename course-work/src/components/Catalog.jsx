import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { categoriesFetching, productsFetching } from "../slice/catalogSlice"
import Categories from "./Categories"
import MainPageCatalog from "./MainPageCatalog"

const Catalog = ()  =>  {
    const dispatch = useDispatch();
    const {
        products,
        categories, 
        errorCategories,
        viewProductCategory, 
    } = useSelector(state => state.catalog);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        dispatch(categoriesFetching());
    }, [dispatch]);

    useEffect(() => {
        dispatch(productsFetching({offset, viewProductCategory}));
    }, [dispatch, offset, viewProductCategory]);

    const handleClick = () => {
        setOffset(offset + 6);
    };

    return (                    
    <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <div className="preloader"></div>
        {errorCategories && <p>{errorCategories}</p>}
        {categories && <Categories list={categories} />}
        <MainPageCatalog />
        {!products || products.length < 6 ? null :
        <div className="text-center">
            <button className="btn btn-outline-primary" onClick={handleClick}>Загрузить ещё</button>
        </div>}
    </section>
    )
}

export default Catalog
