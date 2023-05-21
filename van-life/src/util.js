import { redirect, useNavigate } from "react-router-dom";


export async function requireAuth(request) {
  const pathName = new URL(request.url).pathname
  const isLoggedIn = localStorage.getItem("loggedin")
  if (!isLoggedIn) {
    throw redirect(`/login?message=You must log in first.&redirectTo=${pathName}`)
  }
  return null
}
export async function RequireAuth2() {
  const navigate = useNavigate ();
  const isLoggedIn = false;

  if (!isLoggedIn) {
    navigate('/login');
  }
}