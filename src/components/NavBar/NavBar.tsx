import {NavLink} from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/profile/">Профиль</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs/">Сообщения</NavLink>
          </li>
          <li>
            <NavLink to="/users/">Пользователи</NavLink>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
