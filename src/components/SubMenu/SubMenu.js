import { NavLink } from 'react-router-dom';
import '../../css/style.css';

const SubMenu = (props) => {
    return(
        <ul className='submenu'>
                {props.items.map((item) => <li key={item}> <NavLink to={'/products/' + item}> {item} </NavLink> </li>)}
        </ul>
    )
} 

export default SubMenu;