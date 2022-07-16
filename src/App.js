import './css/style.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import AboutUs from './components/AboutUs/AboutUs';
import Help from './components/Help.js/Help';
import Checkout from './components/Checkout/Checkout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/products/:category' element={ <Products/> }/>
            <Route path='/product/:id' element={ <ItemDetailContainer/> }/>
            <Route path='/cart' element={ <Cart/> }/>
            <Route path='/nosotros' element={ <AboutUs/> }/>
            <Route path='/ayuda' element={ <Help/> }/>
            <Route path='/checkout' element={ <Checkout/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
