import { useParams } from "react-router-dom"

export function HostVanDetail(){
  const param = useParams()
  return(
    
    <div>{param.id}</div>
  );
}