import React from "react";
import styles from "./Counter.module.css";

const Counter = (props) => {
    const { pagesCount, currentPage } = props;
    return (
      <div className={styles.counter}>
        <div>
          {currentPage} /{pagesCount}
        </div>
      </div>
    );
}
export default Counter