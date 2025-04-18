import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import { styled } from "@mui/material/styles";
import { ProductTableProps } from "./interface";

const StyledTableCell = styled(TableCell)({
  backgroundColor: "#3f51b5",
  color: "white",
  fontWeight: "bold",
});

export const ProductTable = ({
  products,
  onRowsPerPageChange,
  onPageChange,
  page,
  rowsPerPage,
}: ProductTableProps) => {
  return (
    <Card sx={{ padding: 2, marginTop: 2, width: "80%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          height: "calc(100vh - 64px)",
          overflow: "auto",
          padding: 2,
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>Tienda</StyledTableCell>
                <StyledTableCell align="right">Precio Normal</StyledTableCell>
                <StyledTableCell align="right">Precio Oferta</StyledTableCell>
                <StyledTableCell align="right">Precio Más Bajo</StyledTableCell>
                <StyledTableCell align="right">Descuento</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((product) => (
                <TableRow key={product.productId}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell align="right">
                    {product.prices.normalPrice}
                  </TableCell>
                  <TableCell align="right">
                    {product.prices.offerPrice}
                  </TableCell>
                  <TableCell align="right">{product.prices.lowest}</TableCell>
                  <TableCell align="right">{0}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </Box>
    </Card>
  );
};
