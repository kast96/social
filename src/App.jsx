import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';
import UsersContainer from './components/Users/UsersContainer.jsx';
import './App.scss';

const App = () => {
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
							</Switch>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
