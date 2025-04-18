import Card from "@mui/material/Card";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import CircularProgress from "@mui/material/CircularProgress";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import { ProductTableProps } from "./interface";
import { StyledTableCell, ProductTableContainer } from "./styles";
import TableCell from "@mui/material/TableCell";

export const ProductTable = ({
  products,
  onRowsPerPageChange,
  onPageChange,
  page,
  rowsPerPage,
  countProducts = 100,
  loading,
}: ProductTableProps) => {
  const showProducts = products?.length !== 0 && loading === false;

  return (
    <Card sx={{ padding: 2, marginTop: 2, width: "80%" }}>
      <ProductTableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Marca</StyledTableCell>
              <StyledTableCell align="right">Precio Normal</StyledTableCell>
              <StyledTableCell align="right">Precio Oferta</StyledTableCell>
              <StyledTableCell align="right">Precio Más Bajo</StyledTableCell>
              <StyledTableCell align="right">Descuento</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {showProducts &&
              products?.map((product) => (
                <TableRow key={product.productId}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell align="right">{product.normalPrice}</TableCell>
                  <TableCell align="right">{product.offerPrice}</TableCell>
                  <TableCell align="right">{product.lowestPrice}</TableCell>
                  <TableCell align="right">{product.discount}</TableCell>
                </TableRow>
              ))}
            {!showProducts && !loading && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No hay productos encontrados
                </TableCell>
              </TableRow>
            )}
            {loading && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  <CircularProgress />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={countProducts}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={onRowsPerPageChange}
          rowsPerPageOptions={[20, 50, 100, 200]}
          labelRowsPerPage="Filas por página:"
        />
      </ProductTableContainer>
    </Card>
  );
};
