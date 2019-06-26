import React from "react";
import styles from "./Controls.module.css";
import propTypes from 'prop-types';

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


Controls.propTypes = {
  handlePrevPage: propTypes.func,
  handleNextPage: propTypes.func,
};