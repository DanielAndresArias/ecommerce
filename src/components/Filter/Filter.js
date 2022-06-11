import { NavLink } from 'react-router-dom';
import '../../css/style.css';

const Filter = () =>{
    return(
        <section className="filter">	
			<h2>Productos</h2>

			<ul>
				<li><NavLink to='/products/mantas'>mantas</NavLink></li>
				<li><NavLink to='/products/mates'>mates</NavLink></li>
				<li><NavLink to='/products/tazas'>tazas</NavLink></li>
			</ul>
		</section>
    )
}

export default Filter;