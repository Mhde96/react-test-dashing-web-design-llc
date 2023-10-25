import { endpoints } from "../constant/endpoints"

export const getProductsApi = async () => {
    let data: any = []
    await fetch(endpoints.products)
        .then(res => res.json())
        .then(json => data = json)


    return data
}