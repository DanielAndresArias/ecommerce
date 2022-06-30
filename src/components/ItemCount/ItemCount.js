import React, { useState, useEffect, useContext } from 'react';


const ItemCount = ({ initial, stock, onAdd }) =>{
    
    const [counter, setCount] = useState(0);

    useEffect(()=>{
        setCount(initial)
    },[initial])

    const increment = (() => {(counter < stock)&& setCount(counter+1)});

    const decrement = (() => {(counter > 0)&& setCount(counter-1)});
    
    return (
        <div className='itemCount'>
            <div className='count'>
                <button onClick={decrement}>-</button>
                    <span>
                        {counter}
                    </span>
                <button onClick={increment}>+</button>
            </div>
            <button className='addToCart' onClick={() => onAdd(counter)}><img src={"/cart.png"} alt={"Carrito de compras"}/><p>Añadir al carrito</p></button>
        </div>
    )
}

export default ItemCount;