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
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
function App() {
  return (
      <BrowserRouter>     
        <Routes>
          {/* first render the outlet and the home, when clock on about dont render the home */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>

            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
          

            <Route path='host' element = {<HostLayout />} >
              <Route index element = {<Dashboard />} />
              <Route path='income' element = {<Income />} /> 
              <Route path='reviews' element = {<Reviews />} /> 
              <Route path='vans' element = {<HostVans />} ></Route>
              <Route path='vans/:id' element = {<HostVanDetail />}>
                  <Route index element={<HostVanInfo />}/>
                  <Route path = 'photos' element={<HostVanPhotos />}/>
                  <Route path = 'pricing' element={<HostVanPricing />}/>
              </Route>
            </Route>
          </Route>
        </Routes>        
     </BrowserRouter> 
  );
}

export default App;
