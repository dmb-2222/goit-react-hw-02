import React from "react";
import styles from "./Controls.module.css";

const Controls = props => {
  const { handlePrevPage, handleNextPage } = props;
  return (
    <div className={styles.controls}>
      <button type="button" className={styles.button} onClick={handlePrevPage}>
        Назад
      </button>
      <button type="button" className={styles.button} onClick={handleNextPage}>
        Вперед
      </button>
    </div>
  );
};
export default Controls;
