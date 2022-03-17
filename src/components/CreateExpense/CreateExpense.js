import React from "react";
import ExpenseForm from "./ExpenseForm";

function CreateExpense() {
  return (
    <section className="create-expense">
      <h2 className="create-expense__header header">Create New Expense</h2>
      <div className="create-expense__container">
        <ExpenseForm />
      </div>
    </section>
  );
}
export default CreateExpense;
