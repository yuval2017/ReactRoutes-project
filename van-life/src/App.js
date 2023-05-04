import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './server'
import  Vans  from './pages/Vans';
import VanDetail from './pages/VanDetail';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/vans' element={<Vans />}/>
            <Route path='/vans/:id' element={<VanDetail />}/>
          </Route>
        </Routes>
       
        
        <button className="van-life-button">Ⓒ 2022 #VANLIFE</button>
     </BrowserRouter> 
    </div>
  );
}

export default App;
