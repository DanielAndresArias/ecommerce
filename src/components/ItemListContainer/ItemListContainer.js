import '../../css/style.css';
import { getProducts } from "../../asyncmock";
import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({tipo}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts(tipo).then(aux => setProducts(aux))

        return(() => setProducts([]))

    }, [tipo]);

    return(
        <section className="itemListContainer">
            <ItemList products={products}/>
        </section>
    )
}

export default ItemListContainer;