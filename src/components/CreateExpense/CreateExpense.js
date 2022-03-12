import Input from "../Input/Input";

function CreateExpense() {
  return (
    <section className="create-expense">
      <h2 className="create-expense__header header">Create New Expense</h2>
      <div className="create-expense__container">
        <form className="create-expense__form">
          <Input name="description" type="text" placeholder="New Expense" />
          <Input name="amount" type="number" placeholder="amount" />
          <Input name="date" type="date" placeholder="" />
          <div className="create-expense__group">
            <label htmlFor="group">Group</label>
            <select
              name="group"
              id="group"
              className="create-expense__selector"
            >
              <option value="Housing & Utilities">Housing & Utilities</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </form>
        <div className="create-expense__btns">
          <button className="create-expense__add create-expense__btn">
            Add
          </button>
          <button className="create-expense__clear create-expense__btn">
            Clear
          </button>
        </div>
      </div>
    </section>
  );
}
export default CreateExpense;
