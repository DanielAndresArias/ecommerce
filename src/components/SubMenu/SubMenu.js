import '../../css/style.css';

const SubMenu = (props) => {
    return(
        <ul className='submenu'>
                {props.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
    )
} 

export default SubMenu;