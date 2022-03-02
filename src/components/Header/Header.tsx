import {NavLink} from 'react-router-dom';

type PropsType = {
  isAuth: boolean
  login: string | null
  logout: () => void
}

const Header: React.FC<PropsType> = ({isAuth, login, logout}) => {
  return (
    <header className="header">
        <div className="logo">Social React</div>
        <div className="login-block">
          {isAuth ? <div>{login} - <button onClick={logout}>Logout</button></div> : <NavLink to="/login/">Login</NavLink>}
        </div>
    </header>
  );
}

export default Header;