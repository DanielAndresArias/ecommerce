import './css/style.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home/> }/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
