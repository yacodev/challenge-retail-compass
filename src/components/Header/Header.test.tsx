import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./Header";

describe("Header Component", () => {
  it("should render the logo image", () => {
    render(<Header />);
    const logoImage = screen.getByAltText("Retail Compass Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.tagName).toBe("IMG");
  });

  it("should render the title text", () => {
    render(<Header />);
    const titleText = screen.getByText("Retail Compass");
    expect(titleText).toBeInTheDocument();
    expect(titleText.tagName).toBe("H4");
  });
});
