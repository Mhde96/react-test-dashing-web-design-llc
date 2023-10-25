import { useContext, useEffect, useState } from "react";
import { PlatformPage } from "../pages/PlatformPage";
import {
  PlatformPagePropsType,
  SortBy,
} from "../types/pages/PlatformPagePropsType";
import { getProductsApi } from "../apis/getProductsApi";
import { AuthContext } from "../context-api/authContextApi";
import { ProductType } from "../types/data/ProductType";
import { ProductContext } from "../context-api/productContextApi";

const sortFunctions: Record<
  SortBy,
  (a: ProductType, b: ProductType) => number
> = {
  id: (a, b) => a.id - b.id,
  reverseid: (a, b) => b.id - a.id,
  title: (a, b) => a.title.localeCompare(b.title),
  reversetitle: (a, b) => b.title.localeCompare(a.title),
  price: (a, b) => a.price - b.price,
  reverseprice: (a, b) => b.price - a.price,
};

export const PlatformContainer = () => {
  const [search, setSearch] = useState("");
  const { data, setData, handleUpdateProduct,handleDeleteProduct } = useContext(ProductContext);

  // const [data, setData] = useState<Array<ProductType>>([]);
  const [sortBy, setSortBy] = useState<SortBy>("id");
  const authContext: any = useContext(AuthContext);

  const compare = (a: ProductType, b: ProductType) => {
    if (sortFunctions[sortBy]) {
      return sortFunctions[sortBy](a, b);
    }
    return 0;
  };

  const dataFiltered = () => {
    const values = data.filter((item) =>
      item?.title?.toLowerCase()?.includes(search.toLowerCase())
    );
    return values.sort(compare);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const handleChangeSearch = (value: string) => {
    setSearch(value);
  };

  const handleChangeSortBy = (newSortBy: SortBy) => {
    setSortBy(newSortBy);
  };

  const handleGetProducts = async () => {
    const products = await getProductsApi();
    setData(products);
  };

  const props: PlatformPagePropsType = {
    data,
    handleChangeSearch,
    handleChangeSortBy,
    sortBy,
    setData,
    dataFiltered,
    user: authContext.user,
    handleUpdateProduct,
    handleDeleteProduct

  };

  return <PlatformPage {...props} />;
};
