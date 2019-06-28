import React from "react";
import styles from "./Controls.module.css";
import propTypes from "prop-types";

const Controls = props => {
  const {
    handlePrevPage,
    handleNextPage,
    isActivPrevPage,
    isActivNextPage
  } = props;
  return (
    <div className={styles.controls}>
      <button
        type="button"
        className={styles.button}
        onClick={handlePrevPage}
        disabled={isActivPrevPage}
      >
        Назад
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={handleNextPage}
        disabled={isActivNextPage}
      >
        Вперед
      </button>
    </div>
  );
};
export default Controls;
Controls.propTypes = {
  handlePrevPage: propTypes.func,
  handleNextPage: propTypes.func
};
