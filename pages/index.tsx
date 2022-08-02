import type { NextPage } from "next";
import styles from "../styles/pages/index.module.css";

const Index: NextPage = () => {
  return (
    <div>
      <div className={styles.gridContainer}>
        <div className={styles.gridCell}>x</div>
        <div className={styles.gridCell}>o</div>
        <div className={styles.gridCell}>o</div>

        <div className={styles.gridCell}>x</div>
        <div className={styles.gridCell}>x</div>
        <div className={styles.gridCell}>o</div>

        <div className={styles.gridCell}>x</div>
        <div className={styles.gridCell}>o</div>
        <div className={styles.gridCell}>x</div>
      </div>
    </div>
  );
};

export default Index;
