import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from './OrderCard';

function Cart() {
  const [productList, setProductList] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  
  useEffect(() => {
  
    const storedProducts = { ...localStorage };
    const order = [];
    let total = 0;

    for (let key in storedProducts) {
     const product = JSON.parse(storedProducts[key]);
     order.push(product);
     total += product.price * product.selectedCount;
    }

    setProductList(order);
    setTotalCost(total);
  }, []);

  const deleteProduct = (id) => {
    const updatedProductList = productList.filter(product => 
      product.keyId !== id
    );
    setProductList(updatedProductList);
    
    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      
      const product = JSON.parse(localStorage[key]);
      if (product.keyId === id) {
        localStorage.removeItem(key);
        break;
     }
    
  }




    const newTotalCost = updatedProductList.reduce((total, product) => total + product.price * product.selectedCount, 0);
    setTotalCost(newTotalCost);
  }


    return (
      <>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {
              productList.map(
                (item, index) => (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td><Link to={`/catalog/${item.id}.html`}>{item.title}</Link></td>
                    <td>{item.selectedSize}</td>
                    <td>{item.selectedCount}</td>
                    <td>{item.price} руб.</td>
                    <td>{item.price * item.selectedCount} руб.</td>
                    <td><button className="btn btn-outline-danger btn-sm" onClick={() => deleteProduct(item.keyId)}>Удалить</button></td>
                  </tr>
                )
              )
            }
            <tr>
              <td colSpan="5" className="text-right">Общая стоимость</td>
              <td>{totalCost} руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
      {totalCost > 0 ?
        <OrderCard />
        : null
      }
      </>
    )

}

export default Cart
