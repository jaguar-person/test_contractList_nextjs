import React from "react";

import * as styles from "./PropertyItem.css";

export type PropertyItemProps = {
  label?: string;
  value: React.ReactNode;
};

export function PropertyItem({ label, value }: PropertyItemProps) {
  return (
    <div className={styles.container}>
      {label ? `${label}: ` : null}{" "}
      {typeof value === "string" ? <strong>{value}</strong> : value}
    </div>
  );
}
