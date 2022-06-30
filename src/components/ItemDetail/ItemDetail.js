import '../../css/style.css';
import { useContext, useEffect, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = (props) =>{

    const { addItem, cart } = useContext(CartContext);

    const [initialCount, setInitialCount] = useState(0);

    const handleOnAdd = (quantity) => {
        addItem({...props, quantity});
    }

    useEffect(()=>{
        cart.forEach((p) => {
            if(p.id === props.id){
                setInitialCount(p.quantity);
            }
        })
    }, [props])

    return (
        <div className="itemDetail">
            <div className="img">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className="info">
                <h3>{props.name}</h3>
                <span className="price">{props.price}</span>
                <span>{props.detalle}</span>
                <ItemCount initial={initialCount} stock={props.stock} onAdd={handleOnAdd}/>
                <button className='finish'><Link to='/cart'>Terminar compra</Link></button>
            </div>
        </div>
    )
}

export default ItemDetail;