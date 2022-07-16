import '../../css/style.css';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {

    const { id } = useParams();

    const [product, setProduct] = useState();

    useEffect(() => {

        const docRef = doc(db, 'products', id)

        getDoc(docRef).then(doc=>{
            const productFormatted = { id: doc.id, ...doc.data() }
            setProduct(productFormatted)
        })

    }, [id]);

    return(
        <main className="itemDetailContainer">
            <ItemDetail {...product}/>
        </main>
    )
}

export default ItemDetailContainer;