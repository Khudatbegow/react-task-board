import React from "react";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <main className={styles.main}>
      <section className={styles.taskColumn}>Section 1</section>
      <section className={styles.taskColumn}>Section 2</section>
      <section className={styles.taskColumn}>Section 3</section>
    </main>
  );
};

export default Main;
