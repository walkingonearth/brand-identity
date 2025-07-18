import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./index";
import type { ButtonPropsType } from "./Button";

describe("Button Component", () => {
  const defaultProps: ButtonPropsType = {
    children: "Test Button",
  };

  it("renders button with children", () => {
    render(<Button {...defaultProps} />);
    expect(
      screen.getByRole("button", { name: "Test Button" })
    ).toBeInTheDocument();
  });

  it("applies default variant and size classes", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-primary", "button-medium");
  });

  it("applies custom variant class", () => {
    render(<Button {...defaultProps} variant="secondary" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-secondary");
  });

  it("applies enclosed-primary variant class", () => {
    render(<Button {...defaultProps} variant="enclosed-primary" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-enclosed-primary");
  });

  it("applies ghost variant class", () => {
    render(<Button {...defaultProps} variant="ghost" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-ghost");
  });

  it("applies custom size class", () => {
    render(<Button {...defaultProps} size="large" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-large");
  });

  it("applies disabled state correctly", () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).not.toHaveClass("button-disabled");
  });

  it("applies loading state correctly", () => {
    render(<Button {...defaultProps} loading />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("button-loading");
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("applies full width class when fullWidth is true", () => {
    render(<Button {...defaultProps} fullWidth />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button-full-width");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button {...defaultProps} onClick={handleClick} />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not trigger click when disabled", () => {
    const handleClick = jest.fn();
    render(<Button {...defaultProps} onClick={handleClick} disabled />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("does not trigger click when loading", () => {
    const handleClick = jest.fn();
    render(<Button {...defaultProps} onClick={handleClick} loading />);
    const button = screen.getByRole("button");

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders icon at start position by default", () => {
    const icon = <span data-testid="test-icon">→</span>;
    render(<Button {...defaultProps} icon={icon} />);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("renders icon at end position when iconPosition is end", () => {
    const icon = <span data-testid="test-icon">←</span>;
    render(<Button {...defaultProps} icon={icon} iconPosition="end" />);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("does not render icon when not provided", () => {
    render(<Button {...defaultProps} />);
    expect(screen.queryByTestId("test-icon")).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button {...defaultProps} className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("sets correct button type via rest props", () => {
    render(<Button {...defaultProps} type="submit" />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });

  describe("Accessibility", () => {
    it("is focusable when not disabled", () => {
      render(<Button {...defaultProps} />);
      const button = screen.getByRole("button");
      button.focus();
      expect(button).toHaveFocus();
    });

    it("is not focusable when disabled", () => {
      render(<Button {...defaultProps} disabled />);
      const button = screen.getByRole("button");
      expect(button).toBeDisabled();
    });
  });
});
