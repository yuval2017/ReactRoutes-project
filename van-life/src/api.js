
export async function getVans(){
  const data = await fetchData("/api/vans", "Failed to fetch vans")
 return data
}
export async function getVan(id){
  const data = await fetchData(`/api/vans/${id}`, `Load van ${id} failed`)
  return data
}
export async function getHostVans(){
  const data = await fetchData("/api/host/vans", "Failed to fetch host vans")
  return data
}
export async function getHostVan(id){
  const data = await fetchData(`/api/host/vans/${id}`, `Load van ${id} failed`)
  return data
}
async function fetchData(path, errorMessage){
  const res =  await fetch(path)
  if(!res.ok){
    const error = new Error(errorMessage);
    error.statusText = res.statusText;
    error.status = res.status;
    throw error;
  }
  const data = await res.json()
  return data.vans
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
      { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    const error = new Error("error when loading loggin");
    error.statusText = res.statusText;
    error.status = res.status;
    throw error
  }

  return data
}