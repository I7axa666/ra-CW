import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsFetching } from "../slice/catalogSlice";
import Card from "./Card";

export default function MainPageCatalog() {
    const dispatch = useDispatch();
    const { isLoadingProducts, productsCatalog,  } = useSelector(state => state.catalog);
    // useEffect(() => {
    //     dispatch(productsFetching());
    // }, []);
    

    return (
        <div className="row">
            {isLoadingProducts && <div className="preloader"></div>}
            {/* {errorProducts && <p>{error}</p>} */}
            {productsCatalog && <Card list={productsCatalog} cl="catalog-item-card" />}
        </div>
    )
}
