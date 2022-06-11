import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import CartWidget from '../CartWidget/CartWidget';
import SubMenu from '../SubMenu/SubMenu';

const Menu = (props) =>{
    return(
        <ul className='menu--desktop'>
            {props.pages.map((page) => {
                return (page === "productos")? 
                <li key={page}> {page} <SubMenu items={props.products}/> </li> :
                <li key={page}> <NavLink to={'/' + ((page === 'inicio')? '' : page)}> {page} </NavLink> </li>
            })}
            <CartWidget/>
        </ul>
    )
}

export default Menu;