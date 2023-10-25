import { memo } from "react";
import { TableHeadProps } from "../types/components/TableHeadProps";

export const TableHead: React.FC<TableHeadProps> = memo(
  ({ title, descending, ascending, sortBy, onClick }) => {
    const isAscending = ascending === sortBy;
    const isDescending = descending === sortBy;

    return (
      <th onClick={onClick} style={{ cursor: "pointer" }}>
        <div style={{ display: "flex" }}>
          {title}
          {isAscending && (
            <img
              src="assets/arrow-up-solid.svg"
              alt="Ascending"
              style={{ width: 10, height: 10 }}
            />
          )}
          {isDescending && (
            <img
              src="assets/arrow-down-solid.svg"
              alt="Descending"
              style={{ width: 10, height: 10 }}
            />
          )}
        </div>
      </th>
    );
  }
);
