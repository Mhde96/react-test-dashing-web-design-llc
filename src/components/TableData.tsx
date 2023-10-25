type TableDataProps = {
  title: any;
  isEdit: boolean;
  onClick?: () => void;
  rowIndex?: number;
  columnIndex?: string;
  handleChange?: (value: string) => void;
  fill?: boolean;
};

export const TableData: React.FC<TableDataProps> = ({
  title,
  isEdit,
  onClick,
  handleChange,
  fill,
}) => {
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
};
