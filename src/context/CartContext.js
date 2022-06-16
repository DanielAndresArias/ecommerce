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
        if(prod.quantity !== 0)
        {
            if(!isInCart(prod)){
                setCart([...cart, prod]);
            }
            else {
                let newCart = [...cart];
                newCart.map((p) => {
                    if(p.id !== prod.id){
                        return p;
                    }
                    else if (p.quantity !== prod.quantity){
                        p.quantity = prod.quantity;
                        return p;
                    }
                });
                setCart(newCart);
            }
        }
        else{
            removeItem(prod);
        }
    }

    const removeItem = (prod) => {
        (isInCart(prod)) && setCart(cart.filter(p => p.id !== prod.id));
    }

    const clearItem = (prod) => {
        setCart([]);
    }

    const isInCart = (prod) => {
        return cart.some(p => p.id === prod.id);
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