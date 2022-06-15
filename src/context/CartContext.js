import { useEffect, useState, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ( {children} ) =>{
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    useEffect(() => {
        let totalQuantity = 0;
        cart.forEach(prod => totalQuantity += prod.quantity);
        setTotalQuantity(totalQuantity);
    }, [cart])

    const addItem = (prod) => {
        (!isInCart(prod)) && setCart([...cart, prod]);
    }

    const removeItem = (prod) => {
        (isInCart(prod)) && setCart(cart.filter(p => p.id !== prod.id));
    }

    const isInCart = (prod) => {
        return cart.find(p => p.id === prod.id);
    }

    return(
        <CartContext.Provider value={{
            cart,
            totalQuantity,
            addItem,
            removeItem,
            isInCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;