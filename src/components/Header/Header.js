import NavBar from '../NavBar/NavBar';
import '../../css/style.css';

const Header = () =>{

    return(
        <header className='header'>
            <div className='logo'>
                <img src='logo.PNG'/>
            </div>
            <NavBar/>
        </header>
    )
}

export default Header;