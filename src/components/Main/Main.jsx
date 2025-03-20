import React from "react";
import styles from "./Main.module.css";
import TaskSection from "../TaskSection/TaskSection";
const Main = () => {
  return (
    <main className={styles.main}>
      <TaskSection title="🎯 To Do" />
      <TaskSection title="⏳ Doing" />
      <TaskSection title="✅ Done" />
    </main>
  );
};

export default Main;
