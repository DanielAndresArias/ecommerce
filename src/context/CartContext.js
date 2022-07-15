import { useEffect, useState, createContext, useRef } from "react";

const CartContext = createContext();

export const CartProvider = ( {children} ) =>{
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const renderRef = useRef(0)

    useEffect(() => {
        const cartSaved = localStorage.getItem('cart')
        const cartParsed = JSON.parse(cartSaved)
        cartParsed &&
            setCart(cartParsed)
    }, [])

    useEffect(() => {
        if(renderRef.current > 0) {
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        renderRef.current += 1
    }, [cart])

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

    const removeItem = (id) => {
        const cartFilter = cart.filter(p => p.id !== id) 
        setCart(cartFilter)
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (prod) => {
        return cart.some(p => p.id === prod.id);
    }

    const getTotalPrice = () => {

        let totalPrice = 0;

        cart.forEach((prod) => {
            totalPrice += prod.price * prod.quantity;
        })

        return totalPrice;
    }

    return(
        <CartContext.Provider value={{
            cart,
            totalQuantity,
            addItem,
            removeItem,
            clearCart,
            isInCart,
            getTotalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;