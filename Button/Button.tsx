import React, { forwardRef } from "react";
import clsx from "clsx";
import styles from "./button.module.scss";

export type ButtonVariantType =
  | "primary"
  | "secondary"
  | "enclosed-primary"
  | "enclosed-secondary"
  | "ghost";
export type ButtonSizeType = "small" | "medium" | "large";
export type ButtonIconPositionType = "start" | "end";

export interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  size?: ButtonSizeType;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: ButtonIconPositionType;
  contentClassName?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(
  (
    {
      variant = "primary",
      size = "medium",
      disabled = false,
      loading = false,
      fullWidth = false,
      icon,
      iconPosition = "start",
      className,
      children,
      onClick,
      contentClassName,
      ...rest
    },
    ref
  ): JSX.Element => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
      if (disabled || loading) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const buttonClasses = clsx(
      styles.button,
      styles[`button-${variant}`],
      styles[`button-${size}`],
      {
        [styles["button-loading"]]: loading,
        [styles["button-full-width"]]: fullWidth,
      },
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        onClick={handleClick}
        disabled={disabled || loading}
        {...rest}
      >
        {icon && iconPosition === "start" && (
          <span className={styles["button-icon"]}>{icon}</span>
        )}
        <span className={clsx(styles["button-content"], contentClassName)}>
          {loading ? (
            <div
              data-testid="loading-spinner"
              className={clsx(
                "spinner-border",
                styles["spinner-border-xs"],
                styles["spinner"]
              )}
            />
          ) : (
            children
          )}
        </span>
        {icon && iconPosition === "end" && (
          <span className={styles["button-icon"]}>{icon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
