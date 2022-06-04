import React, { useState, useEffect } from "react";
import ItemCount from '../ItemCount/ItemCount';

const Item = (props) => {
    
    

    return(
        <div>
            <div>
                <img src={props.image}/>
            </div>
            <span>{props.price}</span>
            <p>{props.name}</p>
            <ItemCount initial={1} stock={5}/>
        </div>
    )
}

export default Item;