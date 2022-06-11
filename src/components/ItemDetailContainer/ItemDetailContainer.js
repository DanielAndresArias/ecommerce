import '../../css/style.css';
import { getProduct } from "../../asyncmock";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState();

    useEffect(() => {

        getProduct(id).then(aux => setProduct(aux))

    }, []);

    return(
        <main className="itemDetailContainer">
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer;