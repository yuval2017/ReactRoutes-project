
export async function getVans(){
  const data = await fetchData("/api/vans", "Failed to fetch vans")
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
    throw {
      message: errorMessage,
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.vans
}