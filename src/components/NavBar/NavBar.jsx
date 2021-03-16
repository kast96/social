import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/profile/">Профиль</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs/">Сообщения</NavLink>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
