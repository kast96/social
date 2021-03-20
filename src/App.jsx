import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import './App.scss';

const App = (props) => {
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
									<Dialogs state={props.state.dialogsPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} />
								</Route>
								<Route path="/profile/">
									<Profile state={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />
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
