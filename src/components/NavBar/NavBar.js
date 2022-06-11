import '../../css/style.css';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '../Menu/Menu';


const NavBar = () => {
    return(
        <nav className='navBar'>
          <Menu pages={["inicio", "productos", "sobre nosotros", "ayuda", "contacto"]}
                products={["mantas", "mates", "tazas"]}
                cartWidget={CartWidget}/>
        </nav>
    )
}

export default NavBar;