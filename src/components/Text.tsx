import { TextType } from "../types/components/TextType";

export const Text = ({ content, textAlign }: TextType) => {
  return (
    <span id="text-styles" style={{ textAlign }}>
      {content}
    </span>
  );
};
