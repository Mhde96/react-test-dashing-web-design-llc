import { ProductType } from "../data/ProductType";


export type SortBy =
    | "id"
    | "reverseid"
    | "title"
    | "reversetitle"
    | "price"
    | "reverseprice";

export type PlatformPagePropsType = {
    data: ProductType[];
    dataFiltered:ProductType[];
    sortBy: SortBy;
    setData: any;
    user: any;
    handleChangeSearch: (value: string) => void;
    handleChangeSortBy: (value: SortBy) => void;
    handleDeleteProduct: (index: number) => void;
    handleUpdateProduct: (index: any) => void;
}