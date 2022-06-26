import '../../css/style.css';
import CartItem from '../CartItem/CartItem';

const CartItemList = ({products}) => {

    return (
        <>
            {products.map((product) => 
            <CartItem key={product.id} {...product}> </CartItem>
            )}
        </>
    )
}

export default CartItemList;