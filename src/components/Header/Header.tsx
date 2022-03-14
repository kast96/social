import {Link} from 'react-router-dom'
import { Layout, Menu, Avatar, Row, Col, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { getStateIsAuth, getStateLogin } from '../../redux/auth-selectors'
import { logout } from '../../redux/auth-reducer'
import s from './Header.module.scss'

const Header: React.FC = () => {
  const { Header } = Layout

  const isAuth = useSelector(getStateIsAuth)
  const login = useSelector(getStateLogin)

  const dispatch = useDispatch()

  const logoutCallback = dispatch(logout)

  return (
    <Header>
			<div className={s.logo}>React Social Network</div>
			<Row>
				<Col span={18}>
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
						<Menu.Item key="1"><Link to="/profile/">Profile</Link></Menu.Item>
						<Menu.Item key="2"><Link to="/users/">Users</Link></Menu.Item>
					</Menu>
				</Col>
				<Col span={6} className={s.rightCol}>
          <span className={s.avatar}>
					  <Avatar alt={login || ''} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
          </span>
          {isAuth ? <span><Button type={'primary'} onClick={logoutCallback}>Log out</Button></span> : <Link to="/login/">Login</Link>}
				</Col>
			</Row>
		</Header>
  );
}

export default Header;