import React from "react";
import styles from "./Publication.module.css";
import propTypes from 'prop-types';

function Publication(props) {
  return (
    <article className={styles.publication}>
      <h2>{ props.title}</h2>
      <p>{ props.text }</p>
    </article>
  );
}

export default Publication;

Publication.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
};