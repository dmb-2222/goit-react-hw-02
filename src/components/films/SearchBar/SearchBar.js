import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ inputValue, onInputChange }) => {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={onInputChange}
      />
    </>
  );
};

export default SearchBar;
