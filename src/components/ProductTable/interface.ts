import { Product } from "../../typescript/product.interface";
import { ChangeEvent, MouseEvent } from "react";

export interface ProductTableProps {
  products: Product[];
  page: number;
  rowsPerPage: number;
  onRowsPerPageChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPageChange: (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
}
