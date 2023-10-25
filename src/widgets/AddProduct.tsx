import { memo, useContext, useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ProductContext } from "../context-api/productContextApi";
import { ProductType } from "../types/data/ProductType";

export const AddProduct = memo(() => {
  const { handleAddProduct } = useContext(ProductContext);

  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const addProduct = () => {
    const parsedPrice = parseFloat(price);

    if (title.trim() === "") {
      alert("Title cannot be empty.");
      return;
    }

    if (isNaN(parsedPrice)) {
      alert("Please Add Valid Price");
      return;
    }

    const newProduct: ProductType = {
      id: 0, // You must  generate a unique ID here
      title,
      price: parsedPrice,
    };

    handleAddProduct(newProduct);

    setTitle("");
    setPrice("");
  };

  return (
    <div id="add-product-styles">
      <div className="column" />
      <InputBox
        placeholder="Name"
        type="text"
        handleChange={(value) => setTitle(value)}
        value={title}
      />
      <InputBox
        placeholder="Price"
        type="text"
        handleChange={(value) => setPrice(value)}
        value={price.toString()}
      />

      <Button onClick={addProduct}>Add</Button>
    </div>
  );
});
