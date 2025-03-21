import React from "react";
import styles from "./Input.module.css";

const Input = ({ onChange, ...props }) => {
  return <input onChange={onChange} className={styles.taskInput} {...props} />;
};

export default Input;
