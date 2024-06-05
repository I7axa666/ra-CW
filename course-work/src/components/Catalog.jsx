import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { categoriesFetching } from "../slice/catalogSlice"
import Categories from "./Categories"
import MainPageCatalog from "./MainPageCatalog"

const Catalog = ()  =>  {
    const dispatch = useDispatch();
    const { categories, isLoadingCategories, errorCategories } = useSelector(state => state.catalog);

    useEffect(() => {
        dispatch(categoriesFetching());
    }, []);

    return (                    
    <section className="catalog">
        <h2 className="text-center">Каталог</h2>
        <div className="preloader"></div>
        {errorCategories && <p>{errorCategories}</p>}
        {categories && <Categories list={categories} />}
        <MainPageCatalog />
    </section>
    )
}

export default Catalog
