import React from "react";
import ExpenseForm from "./ExpenseForm";

function CreateExpense(props) {
  let id = 0;
  const addExpenseHandler = (enteredData) => {
    const data = {
      ...enteredData,
      id: id,
    };
    props.onAddExpense(data);
    id++;
  };
  return (
    <section className="create-expense">
      <h2 className="create-expense__header header">Create New Expense</h2>
      <div className="create-expense__container">
        <ExpenseForm onAddExpense={addExpenseHandler} />
      </div>
    </section>
  );
}
export default CreateExpense;
