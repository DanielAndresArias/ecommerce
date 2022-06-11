import './css/style.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/products/:category' element={ <Products/> }/>
        <Route path='/product/:id' element={ <ItemDetailContainer/> }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
