import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductTable } from "./ProductTable";
import { Product } from "../../interfaces/product.interface";

const mockProducts: Product[] = [
  {
    productId: 1,
    name: "Product 1",
    brand: "Brand 1",
    normalPrice: "100",
    offerPrice: "80",
    lowestPrice: "75",
    discount: "20",
    status: "active",
    sku: "12345",
  },
  {
    productId: 2,
    name: "Product 2",
    brand: "Brand 2",
    normalPrice: "200",
    offerPrice: "150",
    lowestPrice: "140",
    discount: "25%",
    status: "active",
    sku: "12345",
  },
];

describe("ProductTable Component", () => {
  const mockOnPageChange = jest.fn();
  const mockOnRowsPerPageChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render table headers correctly", () => {
    render(
      <ProductTable
        products={mockProducts}
        onPageChange={mockOnPageChange}
        onRowsPerPageChange={mockOnRowsPerPageChange}
        page={0}
        rowsPerPage={20}
        loading={false}
      />
    );

    expect(screen.getByText("Nombre")).toBeInTheDocument();
    expect(screen.getByText("Marca")).toBeInTheDocument();
    expect(screen.getByText("Precio Normal")).toBeInTheDocument();
    expect(screen.getByText("Precio Oferta")).toBeInTheDocument();
    expect(screen.getByText("Precio Más Bajo")).toBeInTheDocument();
    expect(screen.getByText("Descuento")).toBeInTheDocument();
  });

  it("should render products data correctly", () => {
    render(
      <ProductTable
        products={mockProducts}
        onPageChange={mockOnPageChange}
        onRowsPerPageChange={mockOnRowsPerPageChange}
        page={0}
        rowsPerPage={20}
        loading={false}
      />
    );

    const rows = screen.getAllByRole("row");
    const dataRows = rows.slice(1);
    expect(dataRows).toHaveLength(mockProducts.length);
    mockProducts.forEach((product, index) => {
      const row = dataRows[index];
      const cells = within(row).getAllByRole("cell");

      expect(cells[0]).toHaveTextContent(product.name || "");
      expect(cells[1]).toHaveTextContent(product.brand || "");
      expect(cells[2]).toHaveTextContent(product.normalPrice || "");
      expect(cells[3]).toHaveTextContent(product.offerPrice || "");
      expect(cells[4]).toHaveTextContent(product.lowestPrice || "");
      expect(cells[5]).toHaveTextContent(product.discount || "");
    });
  });

  it("should show loading state", () => {
    render(
      <ProductTable
        products={[]}
        onPageChange={mockOnPageChange}
        onRowsPerPageChange={mockOnRowsPerPageChange}
        page={0}
        rowsPerPage={20}
        loading={true}
      />
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("should show no products message when empty", () => {
    render(
      <ProductTable
        products={[]}
        onPageChange={mockOnPageChange}
        onRowsPerPageChange={mockOnRowsPerPageChange}
        page={0}
        rowsPerPage={20}
        loading={false}
      />
    );

    expect(
      screen.getByText("No hay productos encontrados")
    ).toBeInTheDocument();
  });

  it("should handle pagination changes", () => {
    render(
      <ProductTable
        products={mockProducts}
        onPageChange={mockOnPageChange}
        onRowsPerPageChange={mockOnRowsPerPageChange}
        page={0}
        rowsPerPage={20}
        countProducts={100}
        loading={false}
      />
    );

    const nextPageButton = screen.getByRole("button", { name: /next page/i });
    fireEvent.click(nextPageButton);

    expect(mockOnPageChange).toHaveBeenCalled();
  });

  it("should handle rows per page changes", () => {
    render(
      <ProductTable
        products={mockProducts}
        onPageChange={mockOnPageChange}
        onRowsPerPageChange={mockOnRowsPerPageChange}
        page={0}
        rowsPerPage={20}
        countProducts={100}
        loading={false}
      />
    );

    const select = screen.getByLabelText(/filas por página/i);
    fireEvent.mouseDown(select);

    const option = screen.getByRole("option", { name: "50" });
    fireEvent.click(option);

    expect(mockOnRowsPerPageChange).toHaveBeenCalled();
  });
});
