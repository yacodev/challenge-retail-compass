export interface ProductPrices {
  lowest: number;
  offerPrice?: number;
  normalPrice: number;
  cardPrice?: number;
}

export interface Internal {
  id: number;
  categoryIdPath: string;
  fullPath: string;
}

export interface Categories {
  web?: Internal[];
  internal?: Internal[];
}

export interface CompetitorPrices {
  lowest: number;
  normalPrice: number;
}

export interface Competitor {
  productId: number;
  storeId: number;
  storeName: string;
  name: string;
  sku: string;
  brand: string;
  model: string;
  url: string;
  imageUrl: string;
  status: string;
  matchStatus: string;
  created: Date;
  updated: Date;
  extracted: Date;
  prices: CompetitorPrices;
}

export interface ProductResponse {
  productId: number;
  storeId: number;
  storeName: string;
  name: string;
  sku: string;
  brand: string;
  url: string;
  imageUrl: string;
  status: string;
  created: Date;
  updated: Date;
  extracted: Date;
  prices: ProductPrices;
  categories: Categories;
  competitors: Competitor[];
  model?: string;
}

export interface GetProductResponse {
  paging: Paging;
  products: ProductResponse[];
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
