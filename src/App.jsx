import React from 'react';
import {connect} from 'react-redux';
import { initializeApp } from "./redux/app-reducer";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer'));

class App extends React.Component {
	catchAllUnhanledError = (reason, promise) => {
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
				<div className="app">
					<div className="container">
						<HeaderContainer />
						<div className="content">
							<NavBar />
							<div className="main-content">
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
										{withSuspense(UsersContainer)}
									</Route>
									<Route path="/login/">
										{withSuspense(LoginContainer)}
									</Route>
									<Route path="*">
										<div>404</div>
									</Route>
								</Switch>
							</div>
						</div>
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
});

const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const SocialApp = (props) => {
	return (
		<React.StrictMode>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</React.StrictMode>
	);
}

export default SocialApp;