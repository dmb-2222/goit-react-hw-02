import React, { Component } from "react";
import styles from "./Counter.module.css";

export default class Counter extends Component {
  static defuultProps = {
    step: 1
  };
  constructor(props) {
    super(props);
    this.countPage = props.countPage
    //   this.handleIncrement=this.handleIncrement.bind(this);
    //   this.handleDecrement=this.handleDecrement.bind(this);
    this.state = {
      value: 0
    };
  }
  state = {};
  handleIncrement = e => {
    console.log(this.state);
  };

  handleDecrement = e => {};

  render() {
    const { step } = this.props;
    const { value } = this.state;
    return (
      <div className={styles.counter}>
        <div>
          {value} / {this.countPage}
        </div>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleIncrement}
        >
          Increment by {step}
        </button>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleDecrement}
        >
          Decrement by {step}
        </button>
      </div>
    );
  }
}
