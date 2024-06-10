import { useParams } from "react-router-dom";

const ProductInfo = () => {
    const { id } = useParams();
    console.log(id)
    return (

        <section className="catalog-item">
            <h2 className="text-center">text-center</h2>
            <div className="row">
                <div className="col-5">
                    <img src="" className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>Артикул</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>Производитель</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>Цвет</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>Материалы</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>Сезон</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>Повод</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                    <p>
                        Размеры в наличии:{" "}
                        <span className="catalog-item-size selected">
                            18 US
                        </span>

                        {/* {itemDetail?.sizes.map((size) => {
                        if (size.available)
                            return (
                            <span
                                className={
                                size.size === selectedSize
                                    ? "catalog-item-size selected"
                                    : "catalog-item-size"
                                }
                                key={itemDetail.id + size.size}
                                onClick={chooseSize}
                            >
                                {size.size}
                            </span>
                            );
                        })} */}
                    </p>
                    <p>
                        Количество:{" "}
                        <span className="btn-group btn-group-sm pl-2">
                            <button className="btn btn-secondary">
                            -
                            </button>
                            <span className="btn btn-outline-primary">
                            1
                            </span>
                            <button className="btn btn-secondary">
                            +
                            </button>
                        </span>
                        </p>

                    {/* {hasAvailableSize && hasAvailableSize?.length > 0 && (
                        <p>
                        Количество:{" "}
                        <span className="btn-group btn-group-sm pl-2">
                            <button
                            className={
                                selectedCount > 1 && selectedSize
                                ? "btn btn-secondary"
                                : "btn btn-secondary disabled"
                            }
                            onClick={() => {
                                setCount(selectedCount - 1);
                            }}
                            >
                            -
                            </button>
                            <span className="btn btn-outline-primary">
                            {selectedCount}
                            </span>
                            <button
                            className={
                                selectedCount < 10 && selectedSize
                                ? "btn btn-secondary"
                                : "btn btn-secondary disabled"
                            }
                            onClick={() => {
                                setCount(selectedCount + 1);
                            }}
                            >
                            +
                            </button>
                        </span>
                        </p>
                    )} */}
                    </div>
                    <button className="btn btn-danger btn-block btn-lg">
                        В корзину
                    </button>
                    {/* {hasAvailableSize && hasAvailableSize?.length > 0 && (
                    <button
                        className={
                        selectedSize
                            ? "btn btn-danger btn-block btn-lg"
                            : "btn btn-danger btn-block btn-lg disabled"
                        }
                        onClick={addToCart}
                    >
                        В корзину
                    </button>
                    )} */}
                </div>
            </div>
        </section>
    )
}

export default ProductInfo