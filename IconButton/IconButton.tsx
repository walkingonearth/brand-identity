import React, { FC } from "react";
import clsx from "clsx";
import { Button } from "../Button";
import type { ButtonPropsType } from "../Button";
import styles from "./icon-button.module.scss";

export interface IconButtonPropsType
  extends Omit<ButtonPropsType, "children" | "icon" | "iconPosition"> {
  icon: React.ReactNode;
  "aria-label": string; // Make required for accessibility (overrides optional from HTMLButtonElement)
}

export const IconButton: FC<IconButtonPropsType> = ({
  icon,
  "aria-label": ariaLabel,
  variant = "ghost",
  className,
  ...props
}): JSX.Element => {
  return (
    <Button
      {...props}
      variant={variant}
      className={clsx(styles["icon-button"], className)}
      aria-label={ariaLabel}
    >
      {icon}
    </Button>
  );
};
