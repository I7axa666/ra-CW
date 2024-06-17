import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

const OrderSuccess = ()  =>  {
    const navigate = useNavigate();

    useEffect(() => {
        const timer =setTimeout(() => {
            navigate('/');
        }, 3000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <section className="top-sales">
        <h2 className="text-center">Заказ оформлен</h2>
        <p>
          Спасибо за заказ!
        </p>
      </section>
    )
}

export default OrderSuccess