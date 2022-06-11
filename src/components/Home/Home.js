import '../../css/style.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Home = () =>{
    return (
        <main className='home'>
          <h2>destacado</h2>
          <ItemListContainer tipo='mantas'/>
          <h2>ofertas</h2>
          <ItemListContainer tipo='mantas'/>
        </main>
    )
}

export default Home;