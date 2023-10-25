import { useContext, useState } from "react";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ProductContext } from "../context-api/productContextApi";

export const AddProduct = () => {
  const { handleAddProduct } = useContext(ProductContext);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div id="add-product-styles">
      <div className="column" />
      <InputBox
        placeholder="title"
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

      <Button
        onClick={() => {
          const _peice = parseFloat(price);
          handleAddProduct({ price: _peice, title, id: 0 });
          setTitle("");
          setPrice("");
        }}
      >
        Add
      </Button>
    </div>
  );
};
