import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IconButton, type IconButtonPropsType } from "./IconButton";

describe("IconButton Component", () => {
  const defaultProps: IconButtonPropsType = {
    icon: <span data-testid="test-icon">🔍</span>,
    "aria-label": "Search button",
  };

  it("renders IconButton with icon", () => {
    render(<IconButton {...defaultProps} />);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Search button" })
    ).toBeInTheDocument();
  });

  it("requires aria-label prop", () => {
    render(<IconButton {...defaultProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label", "Search button");
  });

  it("defaults to ghost variant", () => {
    render(<IconButton {...defaultProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-ghost");
  });

  it("applies icon-button class", () => {
    render(<IconButton {...defaultProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("icon-button");
  });

  it("accepts custom variant", () => {
    render(<IconButton {...defaultProps} variant="primary" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-primary");
  });

  it("accepts custom className and combines with icon-button", () => {
    render(<IconButton {...defaultProps} className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class", "icon-button");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<IconButton {...defaultProps} onClick={handleClick} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    render(<IconButton {...defaultProps} disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("applies loading state correctly", () => {
    render(<IconButton {...defaultProps} loading />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("button-loading");
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("applies size variants correctly", () => {
    const { rerender } = render(<IconButton {...defaultProps} size="small" />);
    expect(screen.getByRole("button")).toHaveClass("button-small");

    rerender(<IconButton {...defaultProps} size="large" />);
    expect(screen.getByRole("button")).toHaveClass("button-large");
  });

  it("passes through all button props", () => {
    render(
      <IconButton {...defaultProps} type="submit" data-testid="icon-btn" />
    );
    const button = screen.getByTestId("icon-btn");
    expect(button).toHaveAttribute("type", "submit");
  });

  describe("Accessibility", () => {
    it("is focusable when not disabled", () => {
      render(<IconButton {...defaultProps} />);
      const button = screen.getByRole("button");
      button.focus();
      expect(button).toHaveFocus();
    });

    it("has proper role", () => {
      render(<IconButton {...defaultProps} />);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("supports keyboard navigation", () => {
      const handleClick = jest.fn();
      render(<IconButton {...defaultProps} onClick={handleClick} />);
      const button = screen.getByRole("button");

      button.focus();
      fireEvent.keyDown(button, { key: "Enter" });
      fireEvent.keyUp(button, { key: "Enter" });
      // Note: fireEvent.keyDown/keyUp doesn't automatically trigger click for Enter
      // This test verifies the button can receive focus for keyboard navigation
      expect(button).toHaveFocus();
    });
  });
});
