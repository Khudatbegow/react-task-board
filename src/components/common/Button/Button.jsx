import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, ...props }) => {
  return (
    <button className={styles.taskFormButton} {...props}>
      {children}
    </button>
  );
};

export default Button;
