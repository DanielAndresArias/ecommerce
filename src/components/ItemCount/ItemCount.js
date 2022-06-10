import React, { useState, useEffect } from 'react';


const ItemCount = (props) =>{
    
    const [counter, setCount] = useState(props.initial);

    const [countDisplay, setCountDisplay] = useState();

    useEffect(() => {setCountDisplay( (counter !== 0)? 
                                <>
                                    <button onClick={decrement}>-</button>
                                    <span>
                                        {counter}
                                    </span>
                                    <button onClick={increment}>+</button>
                                </>
                                :
                                <>
                                    <button className='addToCart' onClick={increment}><img src={"./cart.png"} alt={"Carrito de compras"}/>Añadir al carrito</button>
                                </>)   
    }, [counter])

    const increment = (() => {(counter < props.stock)&& setCount(counter+1)});

    const decrement = (() => {(counter > props.initial)&& setCount(counter-1)});
    
    return (
        <div className='count'>
            {countDisplay}
        </div>
    )
}

export default ItemCount;