import { Product } from "../../typescript/product.interface";

export interface ProductResponse {
  paging: Paging;
  products: Product[];
}

export interface Paging {
  total: number;
  pages: number;
  size: number;
  currentPage: number;
}

export interface GetProducts {
  page?: number;
  size?: number;
  status?: string;
  brand?: string;
}
