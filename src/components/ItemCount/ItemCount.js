import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../context/CartContext';


const ItemCount = ({ initial, stock, onAdd }) =>{
    
    const [counter, setCount] = useState(0);

    const [countDisplay, setCountDisplay] = useState();

    useEffect(() => { 
        setCountDisplay(<>
                            <div className='count'>
                                <button onClick={decrement}>-</button>
                                <span>
                                    {counter}
                                </span>
                                <button onClick={increment}>+</button>
                            </div>
                            <button className='addToCart' onClick={() => onAdd(counter)}><img src={"/cart.png"} alt={"Carrito de compras"}/><p>Añadir al carrito</p></button>
                        </>)
    }, [counter]);

    useEffect(()=>{
        setCount(initial)
    },[initial])

    const increment = (() => {(counter < stock)&& setCount(counter+1)});

    const decrement = (() => {(counter > 0)&& setCount(counter-1)});
    
    return (
        <div className='itemCount'>
            {countDisplay}
        </div>
    )
}

export default ItemCount;