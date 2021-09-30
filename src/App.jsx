import React from 'react';
import {connect} from 'react-redux';
import { initializeApp } from "./redux/app-reducer.js";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';
import './App.scss';
import Preloader from './components/common/Preloader/Preloader.jsx';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp();
	}

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<BrowserRouter>
				<div className="app">
					<div className="container">
						<HeaderContainer />
						<div className="content">
							<NavBar />
							<div className="main-content">
								<Switch>
									<Route path="/dialogs/">
										<DialogsContainer />
									</Route>
									<Route path="/profile/:userId?">
										<ProfileContainer />
									</Route>
									<Route path="/users/">
										<UsersContainer />
									</Route>
									<Route path="/login/">
										<LoginContainer />
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

export default connect(mapStateToProps, {initializeApp})(App);
