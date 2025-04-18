import { Product } from "../../typescript/product.interface";
import { ChangeEvent, MouseEvent } from "react";

export interface ProductTableProps {
  countProducts?: number;
  loading: boolean;
  page: number;
  products: Product[];
  rowsPerPage: number;
  onRowsPerPageChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
}
