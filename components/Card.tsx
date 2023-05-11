import React from "react";

import * as styles from "./Card.css";

export type CardProps = {
  className?: string;
  children?: React.ReactNode;
};

export function Card({ className, children }: CardProps) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}
