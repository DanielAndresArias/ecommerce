import '../../App.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className='nav'>
          <ul className='menu__desktop'>
            <li>Inicio</li>
            <li>Productos
              <ul className='submenu'>
                <li>Almohadones</li>
                <li>Mantas</li>
                <li>Mates</li>
                <li>Tazas</li>
              </ul>
            </li>
            <li>Sobre Nosotros</li>
            <li>Ayuda</li>
            <li>Contacto</li>
            <CartWidget/>
          </ul>
        </nav>
    )
}

export default NavBar;