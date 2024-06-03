export default async function fetchCatalog(path) {
    const url = new URL('http://localhost:7070/api/') + path
    
    const response = await fetch('catalog.json');
    
    return response
}