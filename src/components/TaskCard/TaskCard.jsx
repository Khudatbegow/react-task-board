import React from "react";
import styles from "./TaskCard.module.css";
import Button from "../common/Button/Button";
const TaskCard = () => {
  return (
    <article className={styles.taskCard}>
      <p className={styles.taskTitle}>This is simple Text.</p>
      <div className={styles.taskCardFooter}>
        <div className={styles.taskCardButtons}>
          <Button className={`tagDefault`} type="button">
            HTML
          </Button>
          <Button className={`tagDefault`} type="button">
            CSS
          </Button>
        </div>
        <Button className={styles.deleteButton} type="button">
          🗑️
        </Button>
      </div>
    </article>
  );
};

export default TaskCard;
