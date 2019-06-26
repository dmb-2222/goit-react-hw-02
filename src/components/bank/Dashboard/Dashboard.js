import React from "react";

import Controls from "../Controls/Controls";
import Balance from "../Balance/Balance";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import shortid from "short-id";
import style from "../style.module.css";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [],
      balance: 0,
      deposit: 0,
      withdraw: 0,
      valueInput: ""
    };
  }

  handleInput = e => {
    e.preventDefault();
    if (Number(e.target.value) > 0) {
      this.setState({ valueInput: e.target.value });
    } else alert("Введите сумму для проведения операции!");
  };

  createNewOperation = typyOperation => {
    const dateOperation = new Date().toLocaleDateString();
    return {
      id: shortid.generate(),
      type: typyOperation,
      amount: this.state.valueInput,
      date: dateOperation
    };
  };

  handleCkickDeposit = () => {
    const operation = this.createNewOperation("Deposit");
    this.setState(prevState => {
      return {
        history: [operation, ...prevState.history],
        deposit: (prevState.deposit += Number(operation.amount)),
        balance: (prevState.balance += Number(operation.amount)),
        valueInput: ""
      };
    });
  };

  handleCkickWithdraw = () => {
    const operation = this.createNewOperation("Withdraw");

    this.setState(prevState => {
      if (this.state.balance >= this.state.valueInput) {
        return {
          balance: (prevState.balance -= Number(operation.amount)),
          valueInput: "",
          history: [operation, ...prevState.history],
          withdraw: (prevState.withdraw += Number(operation.amount))
        };
      } else alert("Не достаточная сумма для снятия");
    });
  };

  render() {
    const { history, balance, deposit, withdraw, valueInput } = this.state;
    return (
      <div className={style.dashboard}>
        <Controls
          onInputChange={this.handleInput}
          deposit={this.handleCkickDeposit}
          withdraw={this.handleCkickWithdraw}
          resetForm={valueInput}
        />
        <Balance balance={balance} deposit={deposit} withdraw={withdraw} />
        <TransactionHistory history={history} />
      </div>
    );
  }
}
export default Dashboard;
