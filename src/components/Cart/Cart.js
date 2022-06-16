import '../../css/style.css';
import CartContext from '../../context/CartContext';
import { useContext, useEffect, useState } from 'react';

const Cart = () => {

    const [listCart, setListCart] = useState();

    const { cart } = useContext(CartContext);

    return (
        <div>Próximamente...</div>
    )
}

export default Cart;