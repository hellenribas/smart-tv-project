export interface IResponse {
    name: string;
    id: number;
}

const BASE_URL = process.env.BASE_URL
const Endpoint = "/foods"

export async function apiGet(): Promise<IResponse[]> {
    const response = await fetch(`${BASE_URL}${Endpoint}`)
    const data: IResponse[] = await response.json()

    return data;
}