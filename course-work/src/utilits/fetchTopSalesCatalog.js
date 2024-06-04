export default async function fetchTopSalesCatalog() {
    const url = new URL('http://localhost:7070/api/top-sales');
    
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();   
    
    return data
}
