import React, { useState } from 'react';


const ItemCount = (props) =>{
    
    const [counter, setCount] = useState(props.initial);

    const increment = (() => {(counter < props.stock)&& setCount(counter+1)});

    const decrement = (() => {(counter > props.initial)&& setCount(counter-1)});
    
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>
                {counter}
            </span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount;