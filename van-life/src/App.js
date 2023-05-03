import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './server'
import  Vans  from './pages/Vans';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className='header'>
          <div className = 'left-section'>
            <Link className='site-logo' to="/">#VANLIFE</Link>
          </div>
          <nav className='nav-bar'>
            <Link className='about-nav' to="/about">About</Link>
            <Link className='vans-nav' to="/vans">Vans</Link>
          </nav>    
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
        </Routes>
        <button className="van-life-button">Ⓒ 2022 #VANLIFE</button>
     </BrowserRouter> 
    </div>
  );
}

export default App;
