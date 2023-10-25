import { memo } from "react";
import { TableDataProps } from "../types/components/TableDataProps";


export const TableData: React.FC<TableDataProps> = memo(
  ({ title, isEdit, onClick, handleChange, fill }) => {
    if (isEdit) {
      const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          if (handleChange) handleChange(e.currentTarget.value);
        }
      };

      return (
        <td style={{ width: fill ? "100%" : "auto" }}>
          <input
            style={{ width: "100%", fontSize: 16, height: "100%" }}
            defaultValue={title}
            onKeyUp={handleKeyUp}
          />
        </td>
      );
    }

    return (
      <td style={{ width: fill ? "100%" : "auto" }} onClick={onClick}>
        {title}
      </td>
    );
  }
);
