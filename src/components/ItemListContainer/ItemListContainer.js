import '../../css/style.css';
import { getProducts } from "../../asyncmock";
import React, { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = ({tipo}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const collectionRef = tipo ? (
            query(collection(db, 'products'), where('category', '==', tipo)))
            : (collection(db, 'products'))

            getDocs(collectionRef).then(response => {
                const productsFormatted = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(productsFormatted);
            })

    }, [tipo]);

    return(
        <section className="itemListContainer">
            <ItemList products={products}/>
        </section>
    )
}

export default ItemListContainer;