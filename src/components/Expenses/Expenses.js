import Expense from "./Expense";
import NoExpense from "./NoExpense";

function Expenses(props) {
  const filteredData = props.expenses;

  let expenseObj = <NoExpense />;
  if (filteredData.length > 0)
    expenseObj = filteredData.map((obj, i) => (
      <Expense
        title={obj.description}
        date={obj.date}
        amount={obj.amount}
        key={`expense--${i}`}
      />
    ));

  return (
    <section className="expenses">
      <div className="expenses__header-box header">
        <h2 className="expenses__header">Your Expenses</h2>
        <div className="expenses__total">
          Total:
          <span>
            £{" "}
            {filteredData
              .map((expense) => Number(expense.amount))
              .reduce((a, c) => {
                return a + c;
              }, 0)}
          </span>
        </div>
      </div>

      <div className="expenses__container">
        <ul className="expenses__list">{expenseObj}</ul>
      </div>
    </section>
  );
}

export default Expenses;
