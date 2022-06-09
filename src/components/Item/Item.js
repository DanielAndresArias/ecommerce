import React, { useState, useEffect } from "react";
import ItemCount from '../ItemCount/ItemCount';

const Item = (props) => {
    
    

    return(
        <div className="card">
            <div>
                <img src={props.image}/>
            </div>
            <div className="info">
                <span>{props.price}</span>
                <p>{props.name}</p>
                <ItemCount initial={1} stock={5}/>
            </div>
        </div>
    )
}

export default Item;