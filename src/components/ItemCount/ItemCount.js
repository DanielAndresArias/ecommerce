import React, { useState, useEffect } from 'react';


const ItemCount = ({ initial, stock, onAdd }) =>{
    
    const [counter, setCount] = useState(initial);

    const [countDisplay, setCountDisplay] = useState();

    useEffect(() => { 
                setCountDisplay(<>
                                    <div className='count--div'>
                                        <button onClick={decrement}>-</button>
                                        <span>
                                            {counter}
                                        </span>
                                        <button onClick={increment}>+</button>
                                    </div>
                                    <button className='addToCart' onClick={() => onAdd(counter)}><img src={"/cart.png"} alt={"Carrito de compras"}/><p>Añadir al carrito</p></button>
                                </>)
    }, [counter])

    const increment = (() => {(counter < stock)&& setCount(counter+1)});

    const decrement = (() => {(counter > initial)&& setCount(counter-1)});
    
    return (
        <div className='count'>
            {countDisplay}
        </div>
    )
}

export default ItemCount;