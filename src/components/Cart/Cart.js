import '../../css/style.css';
import CartContext from '../../context/CartContext';
import CartItemList from '../CartItemList/CartItemList';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, clearCart, getTotalPrice, totalQuantity } = useContext(CartContext);
    
    const totalPrice = getTotalPrice();

    return (
        (totalPrice !== 0)? <main className='cart'>
                                <h1>Carrito de compras</h1>
                                <CartItemList products={cart}/>
                                <div className='resumen'>
                                    <h2> Precio total: $ {totalPrice}</h2>
                                    <button className='clearCart' onClick={() => clearCart()}>Vaciar carrito</button>
                                </div>
                                <Link to='/checkout'>
                                    <button>Finalizar compra</button>
                                </Link>
                            </main>
                            :
                            <main className='cartEmpty'>
                                <h1>Todavía no se han cargado productos...</h1>
                                <Link to='/'>Volver a inicio</Link>
                            </main>
    )
}

export default Cart;