import React from "react";
import styles from "./TaskForm.module.css";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import Select from "../common/Select/Select";

const TaskForm = () => {
  return (
    <form className={styles.form} action="#">
      <Input type="text" placeholder="Enter your task" />
      <div className={styles.taskFormButtons}>
        <Button type="button">HTML</Button>
        <Button type="button">CSS</Button>
        <Button type="button">JavaScript</Button>
        <Button type="button">React</Button>
      </div>
      <div className="">
        <Select />
        <Button type="submit">+ Add Task</Button>
      </div>
    </form>
  );
};

export default TaskForm;
