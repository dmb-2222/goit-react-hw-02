import React from "react";
import styles from "./Publication.module.css";

function Publication(props) {
  return (
    <article className={styles.publication}>
      <h2>{ props.title}</h2>
      <p>{ props.text }</p>
    </article>
  );
}

export default Publication;