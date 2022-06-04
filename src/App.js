import './css/style.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <main>
      <header className='header'>
        <h2 className='name'>MantasXL.Deco</h2>
        <NavBar/>
      </header>

      <ItemListContainer/>
    </main>
  );
}

export default App;
