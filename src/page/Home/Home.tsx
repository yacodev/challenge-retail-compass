import Grid from "@mui/material/Grid";
import { Header } from "../../components/Header";
import { Filters } from "../../components/Filters";
import { useEffect, useState } from "react";
import { Product } from "../../typescript/product.interface";
import { ProductTable } from "../../components/ProductTable";
import { usePagination } from "../../hooks";
import { SelectChangeEvent } from "@mui/material";
import { GetProducts } from "../../services/products/interface";
import { productServices } from "../../services/products/productServices";

export const Home = () => {
  const [products, setProducts] = useState<Product[] | null>([]);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [brandFilter, setBrandFilter] = useState<string | null>(null);

  const { page, rowsPerPage, handlePageChange, handleChangeRowsPerPage } =
    usePagination();

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatusFilter(event.target.value as string);
  };

  const handleBrandChange = (brand: string) => {
    setBrandFilter(brand);
  };

  useEffect(() => {
    const getAllProduct = async () => {
      const params: GetProducts = {
        page,
        size: rowsPerPage,
      };

      if (statusFilter) params.status = statusFilter;
      if (brandFilter) params.brand = brandFilter;

      const response = await productServices.getProducts(params);
      setProducts(response);
    };
    getAllProduct();
  }, [page, rowsPerPage, statusFilter, brandFilter]);

  console.log("products", products);

  return (
    <Grid container direction="column">
      <Header />
      <Grid container direction="row" gap={1}>
        <Filters
          statusFilter={statusFilter ?? ""}
          handleStatusChange={handleStatusChange}
          handleInputChange={handleBrandChange}
        />
        {products && (
          <ProductTable
            products={products}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleChangeRowsPerPage}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        )}
      </Grid>
    </Grid>
  );
};
