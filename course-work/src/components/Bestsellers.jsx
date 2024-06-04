import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { topSalesFetching } from "../slice/catalogSlice"
import Card from "./Card"

const Bestsellers = ()  =>  {

    const dispatch = useDispatch();
    const { topSales, isLoading, error } = useSelector(state => state.catalog)
    useEffect(() => {
        dispatch(topSalesFetching());
    }, []);

    return (                    
    <section className="top-sales">
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="row">
            {isLoading && <div className="preloader"></div>}
            {error && <p>{error}</p>}
            {topSales && <Card list={topSales} />}
        </div>        
    </section>
    )
}

export default Bestsellers
