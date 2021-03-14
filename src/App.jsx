import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <div className="content">
          <NavBar />
          <div className="main-content">
            qwe
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
