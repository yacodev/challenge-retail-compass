import config from "../../config";
import { productsApi } from "../../api/api";
import { GetProducts, ProductResponse } from "./interface";

export const productServices = {
  getProducts: async (params: GetProducts) => {
    try {
      const { data } = await productsApi.get<ProductResponse>(
        `${config.BASE_URL}/pricing/v1/products`,
        { params }
      );
      return data.products;
    } catch (error) {
      console.error("Error fetching products:", error);
      return null;
    }
  },
};
