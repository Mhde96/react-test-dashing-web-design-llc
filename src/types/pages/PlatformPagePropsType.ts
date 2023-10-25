

export type SortBy =
    | "id"
    | "reverseid"
    | "title"
    | "reversetitle"
    | "price"
    | "reverseprice";

export type PlatformPagePropsType = {
    data: Array<any>;
    dataFiltered: () => Array<any>;
    sortBy: SortBy;
    setData: any;
    user: any;
    handleChangeSearch: (value: string) => void;
    handleChangeSortBy: (value: SortBy) => void;
}