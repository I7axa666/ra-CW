export default async function sendOrder(order) {
    const url = new URL('http://localhost:7070/api/order');
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order),
    });
    
    if(!response.ok) {
        throw new Error(response.statusText);
        
    }
    
}