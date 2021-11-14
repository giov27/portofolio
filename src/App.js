import './App.css';
import Navbar from './component/Navbar';
import Cards from './component/Cards';
import ListGroup from './component/ListGroup';
import Footer from './component/Footer';
import SkillsList from './component/SkillsList';
import Landing from './component/Landing';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Cards/>
      <SkillsList/>
      <ListGroup/>
      <Footer/>
    </div>
  );
}

export default App;
