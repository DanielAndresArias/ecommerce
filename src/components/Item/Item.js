import { Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';


const Item = (props) => {
    
    

    return(
        <div className="card">
            <Link to={'/product/' + props.id}>
                <img src={props.image}/>
            </Link>
            <div className="info">
                <span className="price">{props.price}</span>
                <p>{props.name}</p>
                <ItemCount initial={0} stock={5}/>
            </div>
        </div>
    )
}

export default Item;