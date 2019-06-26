import React from "react";
import style from "../style.module.css";

const Balance = ({ balance, deposit, withdraw }) => {
  return (
    <section className={style.balance}>
      <span className={style.deposite}>⬆ {deposit}$</span>
      <span className={style.withdraw}>⬇ {withdraw}$</span>
      <span>Balance: {balance}$</span>
    </section>
  );
};

export default Balance;
