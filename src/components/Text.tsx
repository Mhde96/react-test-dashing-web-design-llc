import { memo } from "react";
import { TextType } from "../types/components/TextType";

export const Text = memo(({ content, textAlign }: TextType) => {
  return (
    <span id="text-styles" style={{ textAlign }}>
      {content}
    </span>
  );
});
