"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import styles from "./primaryButton.module.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor: "white" | "black" | "blue-100" | "blue-200" | "blue-300";
  textColor: "white" | "black" | "blue";
  line?: "on" | "off" | "blue";
  pcWidth?: "sm";
  children: ReactNode;
}

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(({ bgColor = "black", textColor = "blue", line = "off", pcWidth, className, children, onClick, ...rest }, ref) => {
  const buttonClasses = [styles.button, styles[`bg-${bgColor}`], styles[`text-${textColor}`], styles[`line-${line}`], pcWidth && styles[`pc-${pcWidth}`], className].filter(Boolean).join(" ");

  return (
    <button ref={ref} className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
});

PrimaryButton.displayName = "PrimaryButton";
