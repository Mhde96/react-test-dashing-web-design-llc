import { memo, useContext, useEffect, useMemo, useState } from "react";
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

 const PlatformContainer = memo( () => {
  const [search, setSearch] = useState("");
  const { data, setData, handleUpdateProduct, handleDeleteProduct } =
    useContext(ProductContext);

  const [sortBy, setSortBy] = useState<SortBy>("id");
  const authContext: any = useContext(AuthContext);

  const compare = (a: ProductType, b: ProductType) => {
    if (sortFunctions[sortBy]) {
      return sortFunctions[sortBy](a, b);
    }
    return 0;
  };

  const dataFiltered: ProductType[] = useMemo(() => {
    const values: ProductType[] = data.filter((item) =>
      item?.title?.toLowerCase()?.includes(search.toLowerCase())
    );
    return values.sort(compare);
  }, [data, search , sortBy]);

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
    handleDeleteProduct,
  };
  if (data.length == 0) return <div className="center">"loading ..."</div>;
  return <PlatformPage {...props} />;
});

export default PlatformContainer