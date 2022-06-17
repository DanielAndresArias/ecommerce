import '../../css/style.css';
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';

const CartWidget = () =>{

    const { totalQuantity } = useContext(CartContext);

    const [displayQuantity, setDisplayQuantity] = useState();

    useEffect(() => {
        (totalQuantity !== 0)? setDisplayQuantity(<span>{totalQuantity}</span>) : setDisplayQuantity('');
    },[totalQuantity])

    return(
            <Link className='cartWidget' to='/cart'>
                <img src={"/cart.png"} alt={"Carrito de compras"}/>
                {displayQuantity}
            </Link>
    );
}

export default CartWidget;