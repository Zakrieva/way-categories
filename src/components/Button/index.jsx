import React from "react";
import styles from "./index.module.sass";
const Button = ({ title }) => {
  return <div className={styles.but}>{title}</div>;
};

export default Button;
