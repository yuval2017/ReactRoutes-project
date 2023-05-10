import './App.css';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './server'
import  Vans, {loader as vansLoader}  from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';
import HostVans, {loader as hostVansLoader} from './pages/Host/HostVans';
import { HostVanDetail, loader as hostVanLoder } from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import Error from './components/Error';
import Login from './pages/Login';


/* first render the outlet and the home, when clock on about dont render the home */
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />}/>
            <Route path='login' element = {<Login />}/>

            <Route path="vans" loader={vansLoader} element={<Vans />} errorElement = {<Error />}/>
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path='host' element = {<HostLayout />} >
              <Route index element = {<Dashboard />} />
              <Route path='income' element = {<Income />} /> 
              <Route path='reviews' element = {<Reviews />} /> 
              <Route path='vans'  loader={hostVansLoader} errorElement = {<Error />} element = {<HostVans />} ></Route>
              <Route path='vans/:id' loader={(data) => hostVanLoder(data.params.id)} element = {<HostVanDetail />}>
                  <Route index element={<HostVanInfo />}/>
                  <Route path = 'photos' element={<HostVanPhotos />}/>
                  <Route path = 'pricing' element={<HostVanPricing />}/>
              </Route>
            </Route>
            <Route path='*' element = {<h1>Page not found!</h1>} />
          </Route>
          ))

  return (
      <RouterProvider router = {router}/>
  );
}

export default App;
