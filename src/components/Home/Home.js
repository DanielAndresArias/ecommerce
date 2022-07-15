import '../../css/style.css';
import ItemListContainer from '../ItemListContainer/ItemListContainer';

const Home = () =>{
    return (
        <main className='home'>
          <h2>destacado</h2>
          <ItemListContainer tipo={null} especial='destacado'/>
        </main>
    )
}

export default Home;