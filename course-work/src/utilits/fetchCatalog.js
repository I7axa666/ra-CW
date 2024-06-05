
export default async function fetchCatalog(viewProductCategory) {
    const url = new URL('http://localhost:7070/api/items');


    if(viewProductCategory) {
        url.searchParams.append('categoryId', Number(viewProductCategory));
    }
    
    const response = await fetch(url);
    
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();   
    
    return data
}
