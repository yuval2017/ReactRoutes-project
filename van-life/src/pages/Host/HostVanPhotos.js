import { useOutletContext } from 'react-router-dom';
import './HostVanPhotos.css'

export default function HostVanPhotos(){
  const {currentVan} = useOutletContext()
  return(
    <div className='host-van-photo-container'>
      <img src={currentVan.imageUrl} alt='Not found'/>
    </div>
  );
}