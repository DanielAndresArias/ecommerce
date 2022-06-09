import '../../css/style.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Home = () =>{
    return (
        <main className='Home'>
          <ItemListContainer tipo="mantas"/>
          <ItemListContainer tipo="mantas"/>
        </main>
    )
}

export default Home;