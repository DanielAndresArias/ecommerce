import '../../css/style.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Filter from '../Filter/Filter';
import { useParams } from 'react-router-dom';



const Products = () =>{

    const { category } = useParams();

    return(
        <main className='products'>
            <h1>{category}</h1>
            <section className='section'>
                <Filter/>
                <ItemListContainer tipo={category}/>
            </section>
        </main>
    )
}

export default Products;