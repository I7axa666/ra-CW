import { Link } from "react-router-dom";
function Card ({ list, cl }) {
    if(!cl) cl = "";
    return (
        <>
            {list.map(item => (
                <div className="col-4" key={item.id}>
                    <div className={`card ${cl}` }>
                        <img src={item.images[0]} className="card-img-top img-fluid" alt={item.title}/>
                        <div className="card-body">
                            <p className="card-text">{item.title}</p>
                            <p className="card-text">{item.price} руб.</p>
                            <Link to={`/catalog/${item.id}.html`} className="btn btn-outline-primary">Заказать</Link>
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}

export default Card
