import '../../css/style.css';
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    return(
            <Link className='cartWidget' to='/'>
                <img src={"./cart.png"} alt={"Carrito de compras"}/>
            </Link>
    );
}

export default CartWidget;