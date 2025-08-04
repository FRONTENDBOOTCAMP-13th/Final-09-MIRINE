"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./smallButton.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonColor: "orange" | "black" | "blue";
  children: ReactNode;
}

export const SmallButton = forwardRef<HTMLButtonElement, ButtonProps>(({ ButtonColor, className, children, onClick, ...rest }, ref) => {
  const buttonClasses = [styles.button, styles[`color-${ButtonColor}`], className].filter(Boolean).join(" ");

  return (
    <button ref={ref} className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
});

SmallButton.displayName = "SmallButton";
