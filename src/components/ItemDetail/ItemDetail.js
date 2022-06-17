import '../../css/style.css';
import { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = (props) =>{

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        addItem({...props, quantity});
    }

    return (
        <div className="itemDetail">
            <div className="img">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="info">
                <h3>{props.name}</h3>
                <span className="price">{props.price}</span>
                <span>{props.detalle}</span>
                <ItemCount initial={0} stock={5} onAdd={handleOnAdd}/>
                <button className='finish'><Link to='/cart'>Terminar compra</Link></button>
            </div>
        </div>
    )
}

export default ItemDetail;