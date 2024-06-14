import { useState } from 'react';
import sendOrder from '../utilits/sendOrder';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [errors, setErrors] = useState({ phone: false, address: false, agreement: false });
    const items = [];
    const navigate = useNavigate();
 
    const validatePhone = (phone) => {
        const phoneRegex = /^\+7\d{10}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newErrors = {
            phone: !validatePhone(phone),
            address: !address,
            agreement: !agreement,
        };
        setErrors(newErrors);

        if (newErrors.phone || newErrors.address || newErrors.agreement) {
            return;
        };

        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                const item = JSON.parse(localStorage.getItem(key));
                if (item && item.id && item.price && item.selectedCount) {
                    items.push({
                        id: item.id,
                        price: item.price,
                        count: item.selectedCount,
                    });
                }
            }
        };

        const order = {
            owner: {
                phone,
                address,
            },
            items,
        };

 
        await sendOrder(order);
        localStorage.clear();
        navigate('/success.html');
    };

    return (
        <section className="order">
            <h2 className="text-center">Оформить заказ</h2>
            <div className="card">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="phone">Телефон</label>
                        <input
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            id="phone"
                            placeholder="Ваш телефон"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value)
                                setErrors({ ...errors, phone: !validatePhone(e.target.value) });
                            }}
                        />
                        {errors.phone && <div className="invalid-feedback">Введите корректный номер телефона (начинается с +7 и содержит 10 цифр)</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Адрес доставки</label>
                        <input
                            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                            id="address"
                            placeholder="Адрес доставки"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                        {errors.address && <div className="invalid-feedback">Введите адрес доставки</div>}
                    </div>
                    <div className="form-group form-check">
                        <input
                            type="checkbox"
                            className={`form-check-input ${errors.agreement ? 'is-invalid' : ''}`}
                            id="agreement"
                            checked={agreement}
                            onChange={(e) => setAgreement(e.target.checked)}
                        />
                        <label className="form-check-label" htmlFor="agreement">
                            Согласен с правилами доставки
                        </label>
                        {errors.agreement && <div className="invalid-feedback">Необходимо согласие с правилами доставки</div>}
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">
                        Оформить
                    </button>
                </form>
            </div>
        </section>
    );
};

export default OrderCard;
