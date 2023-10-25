import { SortBy } from "../types/pages/PlatformPagePropsType";

type TableHeadProps = {
  title: string;
  descending: string;
  ascending: string;
  sortBy: SortBy;
  onClick: () => void;
};

export const TableHead: React.FC<TableHeadProps> = ({
  title,
  descending,
  ascending,
  sortBy,
  onClick,
}) => {
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
};
