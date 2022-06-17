import React, { useState, useEffect, useContext } from 'react';


const ItemCount = ({ initial, stock, onAdd }) =>{
    
    const [counter, setCount] = useState(initial);

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
    }, [counter])

    const increment = (() => {(counter < stock)&& setCount(counter+1)});

    const decrement = (() => {(counter > initial)&& setCount(counter-1)});
    
    return (
        <div className='itemCount'>
            {countDisplay}
        </div>
    )
}

export default ItemCount;