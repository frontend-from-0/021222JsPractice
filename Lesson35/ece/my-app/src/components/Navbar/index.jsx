import {NavLink} from 'react-router-dom';
import './styles.css';

export const Navbar = ({showGoBack}) => {
  const navLeftClassList = showGoBack ? "nav-list nav-list--right" : "nav-list nav-list--right hidden";

  return (
    <nav className="nav">
      <ul className={navLeftClassList}>
        <li className='nav__item'><NavLink to='/'>Go back</NavLink></li>
      </ul>
      <ul className="nav-list nav-list--right">
        <li className='nav__item'><NavLink to='/recipes/new'>Create new recipe</NavLink></li>
        {/* <li className='nav__item' onClick={handleCreatingNewRecipe}>Create new recipe</li> */}
      </ul>
    </nav>
  )
}