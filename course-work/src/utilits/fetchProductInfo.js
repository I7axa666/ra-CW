export default async function fetchProductInfo(productId) {
    const url = new URL(`http://localhost:7070/api/items/${productId}`);

    const response = await fetch(url);
    
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();   
    
    return data
}
