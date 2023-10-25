import React, { createContext, ReactNode, useState } from "react";
import { ProductType } from "../types/data/ProductType";

export type ProductContextType = {
  data: ProductType[];
  setData: any;
  handleGetProduct: (data: ProductType[]) => void;
  handleAddProduct: (data: ProductType) => void;
  handleUpdateProduct: (data: {
    value: string | number;
    property: string;
    index: number;
  }) => void;
  handleDeleteProduct: (index: number) => void;
};

export const ProductContext = createContext<ProductContextType>({
  data: [],
  setData: () => {},
  handleGetProduct: () => {},
  handleAddProduct: () => {},
  handleUpdateProduct: () => {},
  handleDeleteProduct: () => {},
});

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<ProductType[]>([]);
  const handleGetProduct = (data: ProductType[]) => {
    setData(data);
  };
  const handleAddProduct = (product: ProductType): void => {
    const newId = data[data.length - 1].id + 1;
    setData([
      ...data,
      { id: newId, price: product.price, title: product.title },
    ]);
  };
  const handleUpdateProduct = (props: {
    value: string | number;
    property: string;
    index: number;
  }) => {
    const { index, property, value } = props;
    let copyOfData: any = data;
    copyOfData[index][property] = value;
    setData(copyOfData);
  };
  const handleDeleteProduct = (id: number) => {
    let newData = data.filter((product) => product.id != id);
    setData(newData);
  };

  return (
    <ProductContext.Provider
      value={{
        data,
        setData,
        handleAddProduct,
        handleGetProduct,
        handleUpdateProduct,
        handleDeleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
