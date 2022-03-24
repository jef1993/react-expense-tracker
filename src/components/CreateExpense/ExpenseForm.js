import React, { useState } from "react";

import Input from "../Input/Input";
import Selector from "../Selector/Selector";

function ExpenseForm(props) {
  const defaultData = {
    description: "",
    amount: "",
    date: "",
    group: "Housing & Utilities",
  };
  const [expense, setExpense] = useState(defaultData);

  const descHandler = (e) => {
    setExpense((prev) => {
      return { ...prev, description: e.target.value };
    });
  };
  const amountHandler = (e) => {
    setExpense((prev) => {
      return { ...prev, amount: e.target.value };
    });
  };
  const dateHandler = (e) => {
    setExpense((prev) => {
      return { ...prev, date: e.target.value };
    });
  };
  const groupHandler = (e) => {
    setExpense((prev) => {
      return { ...prev, group: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onAddExpense(expense);
    setExpense(defaultData);
  };

  const clearHandler = () => {
    setExpense(defaultData);
  };

  return (
    <form className="create-expense__form" onSubmit={submitHandler}>
      <Input
        name="description"
        type="text"
        placeholder="New Expense"
        onChange={descHandler}
        value={expense.description}
      />
      <Input
        name="amount"
        type="number"
        placeholder="amount"
        min="0.01"
        step="0.01"
        onChange={amountHandler}
        value={expense.amount}
      />
      <Input
        name="date"
        type="date"
        placeholder=""
        // onValueChange={dataHandler}
        onChange={dateHandler}
        value={expense.date}
      />
      <div className="create-expense__group">
        <label htmlFor="group">Group</label>
        <Selector
          name="group"
          classes="create-expense__selector"
          options={[
            "Housing & Utilities",
            "Food",
            "Transport",
            "Entertainment",
            "Others",
          ]}
          onChange={groupHandler}
          value={expense.group}
        />
      </div>
      <div className="create-expense__btns">
        <button
          className="create-expense__add create-expense__btn"
          type="submit"
        >
          Add
        </button>
        <button
          className="create-expense__clear create-expense__btn"
          onClick={clearHandler}
        >
          Clear
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
