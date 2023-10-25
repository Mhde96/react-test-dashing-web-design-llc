import { endpoints } from '../constant/endpoints';

interface Product {
    id: number;
    name: string;
}

export const getProductsApi = async (): Promise<Product[]> => {
    try {
        const response = await fetch(endpoints.products);

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const json = await response.json();

        if (!Array.isArray(json)) {
            throw new Error('Invalid data format received from the server');
        }

        const data: Product[] = json;

        return data;
    } catch (error) {
        throw error;
    }
};