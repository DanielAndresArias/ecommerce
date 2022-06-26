import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import '../../css/style.css';

const CartItem = ({name, price, quantity, id}) =>{

    const { removeItem } = useContext(CartContext);

    const handleRemove = ((id)=> {
        removeItem(id);
    })

    return (
        <div className='cartItem'>
            <span>{name}</span>
            <span>Cantidad: {quantity}</span>
            <span>Precio unitario: $ {price}</span>
            <span>Total: $ {price * quantity}</span>
            <button onClick={() => handleRemove(id)}>X</button>
        </div>
    )
}

export default CartItem;