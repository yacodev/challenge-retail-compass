import config from "../../config";
import { productsApi } from "../../api/api";
import { GetProducts, GetProductResponse } from "./interface";
import {
  Product,
  ProductServicesResponse,
} from "../../interfaces/product.interface";
import { formatCurrency } from "../../helpers/formatCurrency";

export const productServices = {
  getProducts: async (
    params: GetProducts
  ): Promise<ProductServicesResponse | null> => {
    try {
      const { data } = await productsApi.get<GetProductResponse>(
        `${config.BASE_URL}/pricing/v1/products`,
        { params }
      );
      const products: Product[] = data.products.map((product) => {
        const discount =
          ((product.prices?.normalPrice - product.prices?.lowest) /
            product.prices?.normalPrice) *
          100;

        return {
          productId: product.productId,
          name: product.name,
          lowestPrice: formatCurrency(product.prices.lowest ?? 0),
          normalPrice: formatCurrency(product.prices.normalPrice ?? 0),
          offerPrice: product.prices.offerPrice
            ? formatCurrency(product.prices.offerPrice!)
            : "",
          discount: formatCurrency(discount ?? 0),
          status: product.status,
          brand: product.brand,
          sku: product.sku,
        };
      });

      return {
        products,
        countProducts: data.paging.total,
      };
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  },
};
