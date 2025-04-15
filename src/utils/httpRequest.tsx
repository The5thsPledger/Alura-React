export default async function httpRequest<T>(
    uri: string, method: string, body?: T
) {
    const url = `http://127.0.0.1:3000/api/${uri}`;
    console.log(`URL: ${url}`);
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: body ? JSON.stringify(body) : null,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok:' + response.statusText + " - " + await response.text());
        }
        return await response.json();
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}