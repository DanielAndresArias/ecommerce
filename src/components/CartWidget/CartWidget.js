import '../../css/style.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget = () =>{

    const { totalQuantity } = useContext(CartContext);

    return(
            <Link className='cartWidget' to='/cart'>
                <img src={"/cart.png"} alt={"Carrito de compras"}/>
                <span>{totalQuantity}</span>
            </Link>
    );
}

export default CartWidget;