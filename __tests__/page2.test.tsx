/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "@/app/reset-password/page";

describe("Home", () => {
  it("A short description of the world's first programmer.", () => {
    render(<Home />);

    const text = screen.getByText(
      /Ada Lovelace, an English mathematician and writer, is considered the world's first computer programmer/i,
    );

    expect(text).toBeInTheDocument();
  });
});
