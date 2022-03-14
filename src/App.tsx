import React from 'react';
import {connect} from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import store, { AppStateType } from './redux/redux-store';
import {Provider} from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersPage = React.lazy(() => import('./components/Users/UsersPage'));
const LoginPage = React.lazy(() => import('./components/Login/LoginPage'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
	initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
	catchAllUnhanledError = (e: PromiseRejectionEvent) => {
		alert('Неизвестная ошибка');
	}

	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener('unhandledrejection', this.catchAllUnhanledError);
	}

	componentWillUnmount() {
		window.removeEventListener('unhandledrejection', this.catchAllUnhanledError);
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Layout>
					<Header />
					<Content style={{ padding: '0 50px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<Layout className="site-layout-background" style={{ padding: '24px 0' }}>
							<Sider className="site-layout-background" width={200}>
								<Menu
								mode="inline"
								defaultSelectedKeys={['1']}
								defaultOpenKeys={['sub1', 'sub2']}
								style={{ height: '100%', borderRight: 0 }}
								>
									<SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
										<Menu.Item key="1"><Link to="/profile/">Profile</Link></Menu.Item>
										<Menu.Item key="2"><Link to="/dialogs/">Messages</Link></Menu.Item>
									</SubMenu>
									<SubMenu key="sub2" icon={<LaptopOutlined />} title="Users">
										<Menu.Item key="3"><Link to="/users/">Users</Link></Menu.Item>
									</SubMenu>
								</Menu>
							</Sider>
							<Content style={{ padding: '0 24px', minHeight: 280 }}>
								<Switch>
									<Route exact path="/">
										{<Redirect to={'/profile'} />}
									</Route>
									<Route path="/dialogs/">
										{withSuspense(DialogsContainer)}
									</Route>
									<Route path="/profile/:userId?">
										{withSuspense(ProfileContainer)}
									</Route>
									<Route path="/users/">
										{withSuspense(UsersPage)}
									</Route>
									<Route path="/login/">
										{withSuspense(LoginPage)}
									</Route>
									<Route path="*">
										<div>404</div>
									</Route>
								</Switch>
							</Content>
						</Layout>
					</Content>
				</Layout>
				<Footer />
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state: AppStateType) => ({
	initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SocialApp: React.FC = () => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</React.StrictMode>
	);
}

export default SocialApp;