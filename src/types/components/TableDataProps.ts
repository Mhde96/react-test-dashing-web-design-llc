
 export type TableDataProps = {
    title: any;
    isEdit: boolean;
    onClick?: () => void;
    rowIndex?: number;
    columnIndex?: string;
    handleChange?: (value: string) => void;
    fill?: boolean;
  };