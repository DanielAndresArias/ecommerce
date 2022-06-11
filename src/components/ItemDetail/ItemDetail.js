import '../../css/style.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({image, name, price, detalle}) =>{


    return (
        <div className="itemDetail">
            <div className="img">
                <img src={image}/>
            </div>
            <div className="info">
                <h3>{name}</h3>
                <span className="price">{price}</span>
                <span>{detalle}</span>
                <ItemCount initial={0} stock={5}/>
            </div>
        </div>
    )
}

export default ItemDetail;