import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)({
  backgroundColor: "#3f51b5",
  color: "white",
  fontWeight: "bold",
});

export const ProductTableContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  height: "calc(100vh - 64px)",
  overflow: "auto",
  padding: 2,
});
