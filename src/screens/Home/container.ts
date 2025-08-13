import { useEffect, useState } from "react"
import { apiGet, IResponse } from "../../service/api"

export function useHome() {
    const [data, setData] = useState<IResponse[]>([])

    async function handleData() {
        const data = await apiGet()
        setData(data)
    }


    useEffect(() => {
        handleData()
    }, [])

    return {
        data
    }
}