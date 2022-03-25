import React from "react";
import ExpenseForm from "./ExpenseForm";

function CreateExpense(props) {
  const addExpenseHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: new Date().getTime().toString().padStart(15, "0"),
    };
    props.onAddExpense(data);
  };
  return (
    <section className="create-expense">
      <h2 className="create-expense__header header">Create New Expense</h2>
      <div className="create-expense__container">
        <ExpenseForm onAddExpense={addExpenseHandler} groups={props.groups} />
      </div>
    </section>
  );
}
export default CreateExpense;
