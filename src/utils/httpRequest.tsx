import ResponseModel from "@/models/responseModel";

export default async function httpRequest<TI, TO>(
    uri: string, method: string, body?: TI
) {
    const url = `http://127.0.0.1:3000/api/${uri}`;
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
            console.error('Network response was not ok:' + response.statusText + " - " + await response.text());
        }
        return await response.json() as TO;
    } 
    catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return new ResponseModel(
            500, new Date(), uri, method, "Erro ao realizar a requisição", error as string, body
        ) as TO;
    }
}