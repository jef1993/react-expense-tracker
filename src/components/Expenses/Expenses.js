import Expense from "./Expense";

function Expenses() {
  return (
    <section className="expenses">
      <h2 className="expenses__header">Your Expenses</h2>
      <div className="expenses__total">
        Total:<span>£1000</span>
      </div>
      <div className="expenses__container">
        <Expense title="Expense No.1" date="12, Feb, 2022" amount="500" />
      </div>
    </section>
  );
}

export default Expenses;
