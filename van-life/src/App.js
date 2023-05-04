import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './server'
import  Vans  from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import { HostVanDetail } from './pages/Host/HostVanDetail';
function App() {
  return (
      <BrowserRouter>     
        <Routes>
          {/* first render the outlet and the home, when clock on about dont render the home */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>

            <Route path='vans' >
              <Route index element={<Vans />}/>
              <Route path=':id' element={<VanDetail />}/>
            </Route>

            <Route path='host' element = {<HostLayout />} >
              <Route index element = {<Dashboard />} />
              <Route path='income' element = {<Income />} /> 
              <Route path='reviews' element = {<Reviews />} /> 
              <Route path='vans' element = {<HostVans />} />
              <Route path='vans/:id' element = {<HostVanDetail />}/>
            </Route>
          </Route>
        </Routes>        
     </BrowserRouter> 
  );
}

export default App;
