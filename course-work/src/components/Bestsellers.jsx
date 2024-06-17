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

        <>
            {isLoading && (
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}

             {error && <></>}
                    
            {topSales && !isLoading && (
                <section className="top-sales">
                    <h2 className="text-center">Хиты продаж!</h2>
                    <div className="row">
                        <Card list={topSales} />
                    </div>
                </section>
            )}
        
        </>
    )
}

export default Bestsellers
