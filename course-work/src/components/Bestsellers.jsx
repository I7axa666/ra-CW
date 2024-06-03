import { Outlet } from "react-router-dom"

const Bestsellers = ()  =>  {

    return (                    
    <section className="top-sales">
        {/* <Outlet /> */}
        <h2 className="text-center">Хиты продаж!</h2>
        <div className="preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </section>
    )
}

export default Bestsellers