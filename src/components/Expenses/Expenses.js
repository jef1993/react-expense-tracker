import Expense from "./Expense";

function Expenses() {
  return (
    <section className="expenses">
      <div className="expenses__header-box header">
        <h2 className="expenses__header">Your Expenses</h2>
        <div className="expenses__total">
          Total:<span>£ 1000</span>
        </div>
      </div>

      <div className="expenses__container">
        <Expense
          title="Expense No.1"
          date={new Date(2022, 1, 12)}
          amount="500"
        />
        <Expense
          title="Expense No.1"
          date={new Date(2022, 1, 1)}
          amount="500"
        />
        <Expense
          title="Expense No.1"
          date={new Date(2022, 1, 12)}
          amount="500"
        />
        <Expense
          title="Expense No.1"
          date={new Date(2022, 1, 12)}
          amount="500"
        />
        <Expense
          title="Expense No.1"
          date={new Date(2022, 1, 12)}
          amount="500"
        />
        <Expense
          title="Expense No.1"
          date={new Date(2022, 2, 12)}
          amount="500"
        />
      </div>
    </section>
  );
}

export default Expenses;
