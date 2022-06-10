import { NavLink } from 'react-router-dom';
import '../../css/style.css';
import CartWidget from '../CartWidget/CartWidget';
import SubMenu from '../SubMenu/SubMenu';

const Menu = (props) =>{
    return(
        <ul className='menu--desktop'>
            {props.pages.map((page, i) => {
                return (page === "productos")? 
                <li key={page}> <NavLink to={'/' + page}> {page} </NavLink> <SubMenu items={props.products}/> </li> :
                <li key={page}> <NavLink to={'/' + ((page === 'home')? '' : page)}> {page} </NavLink> </li>
            })}
            <CartWidget/>
        </ul>
    )
}

export default Menu;