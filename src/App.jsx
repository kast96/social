import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import './App.scss';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app">
				<div className="container">
					<Header />
					<div className="content">
						<NavBar />
						<div className="main-content">
							<Switch>
								<Route path="/dialogs/">
									<Dialogs />
								</Route>
								<Route path="/profile/">
									<Profile />
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
