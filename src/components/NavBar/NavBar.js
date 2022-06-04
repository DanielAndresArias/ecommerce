import '../../css/style.css';
import CartWidget from '../CartWidget/CartWidget';
import Menu from '../Menu/Menu';


const NavBar = () => {
    return(
        <nav className='nav'>
          <Menu pages={["inicio", "productos", "sobre nosotros", "ayuda", "contacto"]}
                products={["almohadones", "mantas", "mates", "tazas"]}
                cartWidget={CartWidget}/>
        </nav>
    )
}

console.log(NavBar());

export default NavBar;