import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory, clearProducts, productsFetching, changeOffset } from "../slice/catalogSlice";
import { Link } from "react-router-dom";


export default function Categories({ list }) {
    const [activeCategory, setActiveCategory] = useState(0);
    const { offset, productSearch, viewProductCategory } = useSelector(state => state.catalog);
    const dispatch = useDispatch();
    
    const handleClick = (index, id) => {
        
        setActiveCategory(index);
        dispatch(clearProducts());
        dispatch(changeCategory(id));
        dispatch(changeOffset(0));
        dispatch(productsFetching({offset, viewProductCategory, productSearch}))
    };

    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <p 
                    className={`nav-link ${activeCategory === 0 ? 'active' : ''}`}
                    onClick={() => handleClick(0, 0)}
                >
                    Все
                </p>
            </li>
            {list.map((category, index) => (
                <li className="nav-item" key={category.id}>
                    <p 
                        className={`nav-link ${activeCategory === index + 1 ? 'active' : ''}`}
                        
                        onClick={() => handleClick(index + 1, category.id)}
                    >
                        {category.title}
                    </p>
                </li>
            ))}
        </ul>
    );
}
