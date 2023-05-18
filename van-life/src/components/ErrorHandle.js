import {useRouteError } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function ErrorHandle(){
  const error = useRouteError()
  const message = error.message
  return(
    message === 'Unauthorized' ?
    <Navigate to="/login?message=You muse log in first"/>
    : <div>Error in Page2</div>
  );
}