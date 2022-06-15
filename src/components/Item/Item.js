import { Link } from "react-router-dom";


const Item = (props) => {

    return(
        <div className="card">
            <Link to={'/product/' + props.id}>
                <img src={props.image}/>
            </Link>
            <div className="info">
                <span className="price">{props.price}</span>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Item;