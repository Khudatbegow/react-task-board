import React from "react";
import styles from "./Header.module.css";
import TaskForm from "../TaskForm/TaskForm";
const Header = () => {
  return (
    <header className={styles.header}>
      <TaskForm />
    </header>
  );
};

export default Header;
