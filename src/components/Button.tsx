import { ButtonType } from "../types/components/ButtonType";

export const Button: React.FC<ButtonType> = ({
  children,
  onClick,
  loading,
}) => (
  <div onClick={onClick} id="button-styles" role="button">
    {loading ? "Loading..." : children}
  </div>
);
