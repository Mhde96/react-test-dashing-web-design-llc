import { SortBy } from "../pages/PlatformPagePropsType";

export type TableHeadProps = {
    title: string;
    descending?: string;
    ascending?: string;
    sortBy: SortBy;
    onClick: () => void;
};
