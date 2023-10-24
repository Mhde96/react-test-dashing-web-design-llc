import { ButtonType } from "../types/components/ButtonType";

export const Button = ({ children, onClick }: ButtonType) => {
  return <div id="button-styles">{children}</div>;
};
