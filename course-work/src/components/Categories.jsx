import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../slice/catalogSlice";


export default function Categories({ list }) {
    const [activeCategory, setActiveCategory] = useState(0);
    const { viewProductCategory } = useSelector(state => state.catalog);
    const dispatch = useDispatch();

    const handleClick = (index, id) => {
        setActiveCategory(index);
        dispatch(changeCategory(id));
    };

    return (
        <ul className="catalog-categories nav justify-content-center">
            <li className="nav-item">
                <a
                    className={`nav-link ${activeCategory === 0 ? 'active' : ''}`}
                    // href="#"
                    onClick={() => handleClick(0, null)}
                >
                    Все
                </a>
            </li>
            {list.map((category, index) => (
                <li className="nav-item" key={category.id}>
                    <a
                        className={`nav-link ${activeCategory === index + 1 ? 'active' : ''}`}
                        // href="#"
                        onClick={() => handleClick(index + 1, category.id)}
                    >
                        {category.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}
