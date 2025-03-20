import React from "react";
import styles from "./TaskSection.module.css";
import TaskCard from "../TaskCard/TaskCard";
const TaskSection = ({ title }) => {
  return (
    <section className={styles.taskColumn}>
      <h2>{title}</h2>
      <TaskCard />
    </section>
  );
};

export default TaskSection;
