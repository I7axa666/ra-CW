import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productInfoFetching } from "../slice/catalogSlice";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function ProductInfo () {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { productInfo, isLoadingProductInfo, errorProductInfo } = useSelector(state => state.catalog);
    const [selectedCount, setSelectedCount] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        dispatch(productInfoFetching({productId: id}));    
    }, [dispatch, id]);

    useEffect(() => {
        if (productInfo.sizes && productInfo.sizes.length > 0) {
            setSelectedSize(productInfo.sizes[0].size);
        }
   }, [productInfo.sizes]);
    
    const {
        title, images, manufacturer, sku, color,
        material, reason, season, price
    } = productInfo;

    let image = '';
    if (images) {
        image = images[0];
    }

    const chooseSize = (size) => {
        setSelectedSize(size);
    }

    const goToCart = () => {
        const keyId = uuidv4();
        const productOrder = {
            id: Number(id),
            keyId,
            title, 
            selectedSize, 
            selectedCount, 
            price,
            selectedCount,
        }

        let found = false;

        if(localStorage.length > 0) {     
            // debugger
            for(let i=0; i<localStorage.length; i++) {
                let key = localStorage.key(i);
                
                const product = JSON.parse(localStorage[key]);
                if (product.id === productOrder.id && product.selectedSize === productOrder.selectedSize) {
                    localStorage.removeItem(key);
                    productOrder.selectedCount += product.selectedCount;
                    found = true;
                    break;
                }
              
            }
            localStorage.setItem(keyId, [JSON.stringify(productOrder)]);
        }

        if (!found) {
            localStorage.setItem(keyId, [JSON.stringify(productOrder)]);
        }
        
        navigate('/cart.html');
    }

    return (
        <>
            {isLoadingProductInfo && (
                <div className="preloader">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            )}

            {errorProductInfo && <></>}

            {productInfo && !isLoadingProductInfo && (
                <section className="catalog-item">
                    <h2 className="text-center">{title}</h2>
                    <div className="row">
                        <div className="col-5">
                            <img src={image} className="img-fluid" alt={title} />
                        </div>
                        <div className="col-7">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{sku}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{color}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{material}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{season}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{reason}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                            <p>
                                Размеры в наличии:{" "}
                                {productInfo.sizes ? (
                                    productInfo.sizes.map((size, index) => (
                                        <span 
                                            className={`catalog-item-size ${size.size === selectedSize ? "selected" : ""}`} 
                                            key={index}  
                                            onClick={() => chooseSize(size.size)}>
                                            {size.size}
                                        </span>
                                    ))
                                ) : (
                                    <>Нет в наличии</>
                                )}
                            </p>
                            <p>
                                Количество:{" "}
                                <span className="btn-group btn-group-sm pl-2">
                                    <button 
                                        className={
                                            selectedCount > 1 && selectedSize
                                            ? "btn btn-secondary"
                                            : "btn btn-secondary disabled"
                                        }
                                        onClick={() => setSelectedCount(selectedCount - 1)}
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
                                        onClick={() => setSelectedCount(selectedCount + 1)}

                                    >
                                    +
                                    </button>
                                </span>
                                </p>                               
                            </div>
                            <button
                                className={
                                selectedSize
                                    ? "btn btn-danger btn-block btn-lg"
                                    : "btn btn-danger btn-block btn-lg disabled"
                                }
                                onClick={goToCart}
                            >
                                В корзину
                            </button>

                        </div>
                    </div>
                </section>
            )}    
        </>    
    )
}

export default ProductInfo
