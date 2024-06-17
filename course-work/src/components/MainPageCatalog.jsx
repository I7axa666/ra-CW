import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsFetching } from "../slice/catalogSlice";
import Card from "./Card";

export default function MainPageCatalog() {
    const dispatch = useDispatch();
    const { productsCatalog } = useSelector(state => state.catalog);
    
    return (
                 
            <div className="row">
                <Card list={productsCatalog} cl="catalog-item-card" />
            </div>

    )
}
