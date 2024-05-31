const Main = () => {

    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <div className="banner">
                        <img src="./img/banner.jpg" className="img-fluid" alt="К весне готовы!" />
                    </div>
                    <h2>К весне готовы!</h2>
                    <section className="top-sales">
                        <h2 className="text-center">Хиты продаж!</h2>
                        <div className="preloader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </section>
                    <section className="catalog">
                        <h2 className="text-center">Каталог</h2>
                        <div className="preloader">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Main