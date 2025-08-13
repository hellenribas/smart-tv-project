export interface IResponse {
    name: string;
    id: number;
}

export async function apiGet(): Promise<IResponse[]> {
    const BASE_URL = "http://localhost:3000"
    const Endpoint = "/foods"

    const response = await fetch(`${BASE_URL}${Endpoint}`)
    const data: IResponse[] = await response.json()

    return data;
}