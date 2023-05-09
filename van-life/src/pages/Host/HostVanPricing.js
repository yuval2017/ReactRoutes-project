import { useOutletContext } from 'react-router-dom';
import './HostVanPricing.css'
export default function HostVanPricing(){ 
  const {currentVan} = useOutletContext()
  return(
    <h1 className='host-van-price'>{currentVan.price}$ <span>/day</span></h1>
  );
}