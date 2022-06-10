import NavBar from '../NavBar/NavBar';
import '../../css/style.css';
import { Link } from 'react-router-dom';

const Header = () =>{

    return(
        <header className='header'>
            <Link className='logo' to='/'>
                <img src='logo.PNG'/>
            </Link>
            <NavBar/>
        </header>
    )
}

export default Header;