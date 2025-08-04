import styles from "./container.module.css";

export interface ContainerProps {
  children: React.ReactNode;
  pcWidth?: "sm";
}

export default function Container({ children, pcWidth }: ContainerProps) {
  const containerClasses = [styles.container, pcWidth && styles[`pc-${pcWidth}`]].filter(Boolean).join(" ");

  return <div className={containerClasses}>{children}</div>;
}
