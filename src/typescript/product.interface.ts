export interface Product {
  productId: number;
  name: string;
  lowestPrice?: string;
  normalPrice?: string;
  offerPrice?: string;
  discount?: string;
  status: string;
  brand: string;
  sku: string;
}

export interface ProductServicesResponse {
  products: Product[];
  countProducts: number;
}
