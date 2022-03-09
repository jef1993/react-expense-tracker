import Input from "../Input/Input";

function CreateExpense() {
  return (
    <section className="create-expense">
      <h2 className="create-expense__header">Create New Expense</h2>
      <div className="create-expense__container">
        <form className="create-expense__form">
          <Input name="description" type="text" placeholder="New Expense" />
          <Input name="amount" type="number" placeholder="amount" />
          <Input name="date" type="date" placeholder="" />
          <Input name="group" type="text" placeholder="Select group" />
        </form>
        <div className="create-expense__btns">
          <button className="create-expense__add">Add</button>
          <button className="create-expense__clear">Clear</button>
        </div>
      </div>
    </section>
  );
}
export default CreateExpense;
