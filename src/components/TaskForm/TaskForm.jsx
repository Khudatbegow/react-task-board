import React, { useState } from "react";
import styles from "./TaskForm.module.css";
import Button from "../common/Button/Button";
import Input from "../common/Input/Input";
import Select from "../common/Select/Select";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const checkTag = (tagName) => {
    return taskData.tags.some((tag) => tag === tagName);
  };
  const selectTag = (tagName) => {
    if (taskData.tags.some((tag) => tag === tagName)) {
      const filterTags = taskData.tags.filter((tag) => tag !== tagName);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(taskData);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input onChange={handleChange} name="task" type="text" placeholder="Enter your task" />
      <div className={styles.taskActions}>
        <div className={styles.taskFormButtons}>
          <Button
            className={`${styles.taskFormButton} tagDefault`}
            selectTag={selectTag}
            selected={checkTag("HTML")}
            type="button"
          >
            HTML
          </Button>
          <Button
            className={`${styles.taskFormButton} tagDefault`}
            selectTag={selectTag}
            selected={checkTag("CSS")}
            type="button"
          >
            CSS
          </Button>
          <Button
            className={`${styles.taskFormButton} tagDefault`}
            selectTag={selectTag}
            selected={checkTag("JavaScript")}
            type="button"
          >
            JavaScript
          </Button>
          <Button
            className={`${styles.taskFormButton} tagDefault`}
            selectTag={selectTag}
            selected={checkTag("React")}
            type="button"
          >
            React
          </Button>
        </div>
        <div>
          <Select onChange={handleChange} name="status" />
          <button className={styles.submitButton} type="submit">
            + Add Task
          </button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;
