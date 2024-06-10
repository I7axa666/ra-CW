
export default async function fetchCatalog(viewProductCategory, offset, productSearch) {
    const url = new URL('http://localhost:7070/api/items');
    
    if(viewProductCategory !== 0) {
        url.searchParams.append('categoryId', Number(viewProductCategory));
    }

    if(offset !== 0) {
        url.searchParams.append('offset', Number(offset));
    }

    if(productSearch && productSearch !== '') {
        url.searchParams.append('q', productSearch);
    }
    const response = await fetch(url);
    
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    const data = await response.json();   
    
    return data
}
