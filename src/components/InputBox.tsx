import { memo } from "react";
import { InputBoxType } from "../types/components/InputBoxType";

export const InputBox = memo( ({
  handleChange,
  type,
  placeholder,
  value,
  error,
}: InputBoxType) => {
  return (
    <>
      <input
        className="inputbox-styles"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />

      {error && <span className="error">{error}</span>}
    </>
  );
});
