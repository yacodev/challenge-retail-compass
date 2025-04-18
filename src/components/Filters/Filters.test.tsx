import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Filters } from "./Filters";
import { SelectChangeEvent } from "@mui/material/Select";
import { SelectOptionsProps } from "../SelectOption/interface";
import { InputSearchProps } from "../InputSearch/interface";

jest.mock("../SelectOption", () => ({
  SelectOption: ({ label, value, onChangeValue }: SelectOptionsProps) => (
    <select
      data-testid="select-option"
      value={value}
      onChange={(e) =>
        onChangeValue({
          target: { value: e.target.value },
        } as SelectChangeEvent<string>)
      }
      aria-label={label}
    >
      <option value="">Select {label}</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  ),
}));

jest.mock("../InputSearch", () => ({
  InputSearch: ({ placeholder, onInputChange }: InputSearchProps) => (
    <input
      data-testid="input-search"
      placeholder={placeholder}
      onChange={(e) => onInputChange(e.target.value)}
    />
  ),
}));

describe("Filters Component", () => {
  const mockHandleStatusChange = jest.fn();
  const mockHandleInputChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render status filter and search input", () => {
    render(
      <Filters
        statusFilter=""
        handleStatusChange={mockHandleStatusChange}
        handleInputChange={mockHandleInputChange}
      />
    );

    expect(screen.getByTestId("select-option")).toBeInTheDocument();
    expect(screen.getByTestId("input-search")).toBeInTheDocument();
  });

  it("should handle status change", () => {
    render(
      <Filters
        statusFilter=""
        handleStatusChange={mockHandleStatusChange}
        handleInputChange={mockHandleInputChange}
      />
    );

    const select = screen.getByTestId("select-option");
    fireEvent.change(select, { target: { value: "active" } });

    expect(mockHandleStatusChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: { value: "active" },
      })
    );
  });

  it("should handle brand search input", () => {
    render(
      <Filters
        statusFilter=""
        handleStatusChange={mockHandleStatusChange}
        handleInputChange={mockHandleInputChange}
      />
    );

    const input = screen.getByTestId("input-search");
    fireEvent.change(input, { target: { value: "brand name" } });

    expect(mockHandleInputChange).toHaveBeenCalledWith("brand name");
  });

  it("should render with initial status value", () => {
    render(
      <Filters
        statusFilter="active"
        handleStatusChange={mockHandleStatusChange}
        handleInputChange={mockHandleInputChange}
      />
    );

    const select = screen.getByTestId("select-option");
    expect(select).toHaveValue("active");
  });

  it("should render with correct placeholder in search input", () => {
    render(
      <Filters
        statusFilter=""
        handleStatusChange={mockHandleStatusChange}
        handleInputChange={mockHandleInputChange}
      />
    );

    const input = screen.getByPlaceholderText("Buscar por marca");
    expect(input).toBeInTheDocument();
  });
});
