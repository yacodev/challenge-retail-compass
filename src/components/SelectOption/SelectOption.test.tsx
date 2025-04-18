import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SelectOption } from "./SelectOption";
import { SelectOptionsProps } from "./interface";

describe("SelectOption Component", () => {
  const mockOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const mockOnChange = jest.fn();

  const defaultProps: SelectOptionsProps = {
    options: mockOptions,
    value: "",
    onChangeValue: mockOnChange,
    label: "Test Label",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display all options when clicked", async () => {
    render(<SelectOption {...defaultProps} />);
    const select = screen.getByRole("combobox");
    fireEvent.mouseDown(select);

    await waitFor(() => {
      mockOptions.forEach((option) => {
        expect(screen.getByText(option.label)).toBeInTheDocument();
      });
    });
  });

  it("should show clear button when value is selected", () => {
    render(<SelectOption {...defaultProps} value="option1" />);

    const clearButton = screen.getByRole("button", {
      name: /clear selection/i,
    });
    expect(clearButton).toBeInTheDocument();
  });

  it("should not show clear button when no value is selected", () => {
    render(<SelectOption {...defaultProps} value="" />);

    const clearButton = screen.queryByRole("button", {
      name: /clear selection/i,
    });
    expect(clearButton).not.toBeInTheDocument();
  });

  it("should clear selection when clear button is clicked", () => {
    render(<SelectOption {...defaultProps} value="option1" />);

    const clearButton = screen.getByRole("button", {
      name: /clear selection/i,
    });
    fireEvent.click(clearButton);

    expect(mockOnChange).toHaveBeenCalled();
  });
});
