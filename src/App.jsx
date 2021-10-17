import React from 'react';
import {connect} from 'react-redux';
import { initializeApp } from "./redux/app-reducer.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader.jsx';
import store from './redux/redux-store.js';
import {Provider} from 'react-redux';
import { withSuspense } from './hoc/withSuspense.jsx';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.jsx'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer.jsx'));
const LoginContainer = React.lazy(() => import('./components/Login/LoginContainer.jsx'));

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
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