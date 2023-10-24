import { InputBoxType } from "../types/components/InputBoxType";

export const InputBox = ({ handleChange, type, placeholder }: InputBoxType) => {
  return (
    <input
      className="inputbox-styles"
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};
