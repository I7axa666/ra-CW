import { v4 as uuidv4 } from 'uuid';

function Card ({list} = props) {

    return (
        <>
            {list.map(item => (
                <div className="col-4" key={uuidv4()}>
                    <div className="card" >
                        <img src={item.images[0]} className="card-img-top img-fluid" alt={item.title}/>
                        <div className="card-body">
                            <p className="card-text">{item.title}</p>
                            <p className="card-text">{item.price} руб.</p>
                            <a href={`/${item.id}.html`} className="btn btn-outline-primary">Заказать</a>
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}

export default Card