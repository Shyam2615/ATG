import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Headers from './components/Headers';
import Posts from './components/Posts';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Headers/>
      <Posts/>
    </>
  );
}

export default App;
