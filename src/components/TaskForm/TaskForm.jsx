import React from "react";
import styles from "./TaskForm.module.css";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import Select from "../common/Select/Select";

const TaskForm = () => {
  return (
    <form className={styles.form} action="#">
      <Input type="text" placeholder="Enter your task" />
      <div className={styles.taskActions}>
        <div className={styles.taskFormButtons}>
          <Button className={styles.taskFormButton} type="button">HTML</Button>
          <Button className={styles.taskFormButton} type="button">CSS</Button>
          <Button className={styles.taskFormButton} type="button">JavaScript</Button>
          <Button className={styles.taskFormButton} type="button">React</Button>
        </div>
        <div className="">
          <Select />
          <Button className={styles.submitButton} type="submit">+ Add Task</Button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
