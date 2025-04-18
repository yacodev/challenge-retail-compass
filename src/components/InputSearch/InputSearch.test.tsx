import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { InputSearch } from "./InputSearch";

describe("InputSearch Component", () => {
  const mockOnInputChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("should render with placeholder", () => {
    render(
      <InputSearch
        onInputChange={mockOnInputChange}
        placeholder="Search here..."
      />
    );

    expect(screen.getByPlaceholderText("Search here...")).toBeInTheDocument();
  });

  it("should show search icon", () => {
    render(
      <InputSearch
        onInputChange={mockOnInputChange}
        placeholder="Search here..."
      />
    );

    expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
  });

  it("should call onInputChange after debounce delay", async () => {
    render(
      <InputSearch
        onInputChange={mockOnInputChange}
        placeholder="Search here..."
      />
    );

    const input = screen.getByPlaceholderText("Search here...");
    fireEvent.change(input, { target: { value: "test" } });

    expect(mockOnInputChange).not.toHaveBeenCalled();

    act(() => {
      jest.advanceTimersByTime(700);
    });

    expect(mockOnInputChange).toHaveBeenCalledWith("test");
  });

  it("should not call onInputChange before debounce delay", () => {
    render(
      <InputSearch
        onInputChange={mockOnInputChange}
        placeholder="Search here..."
      />
    );

    const input = screen.getByPlaceholderText("Search here...");
    fireEvent.change(input, { target: { value: "test" } });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(mockOnInputChange).not.toHaveBeenCalled();
  });

  it("should clear previous timeout on new input", () => {
    render(
      <InputSearch
        onInputChange={mockOnInputChange}
        placeholder="Search here..."
      />
    );

    const input = screen.getByPlaceholderText("Search here...");

    fireEvent.change(input, { target: { value: "test1" } });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    fireEvent.change(input, { target: { value: "test2" } });

    act(() => {
      jest.advanceTimersByTime(700);
    });

    expect(mockOnInputChange).toHaveBeenCalledTimes(1);
    expect(mockOnInputChange).toHaveBeenCalledWith("test2");
  });
});
