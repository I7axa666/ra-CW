import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsFetching } from "../slice/catalogSlice";
import Card from "./Card";

export default function MainPageCatalog() {
    const dispatch = useDispatch();
    const { products, isLoadingProducts, errorProducts, viewProductCategory } = useSelector(state => state.catalog);
    useEffect(() => {
        dispatch(productsFetching());
    }, []);

    return (
        <div className="row">
            {isLoadingProducts && <div className="preloader"></div>}
            {errorProducts && <p>{error}</p>}
            {products && <Card list={products} cl="catalog-item-card" />}
        </div>
    )
}
