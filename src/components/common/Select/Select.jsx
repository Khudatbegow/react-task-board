import React from "react";
import styles from "./Select.module.css";
const Select = ({ ...props }) => {
  return (
    <select className={styles.taskStatus} {...props}>
      <option value="todo">To Do</option>
      <option value="doing">Doing</option>
      <option value="done">Done</option>
    </select>
  );
};

export default Select;
