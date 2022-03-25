import Expense from "./Expense";
import NoExpense from "./NoExpense";

function Expenses(props) {
  let expenseObj = <NoExpense />;
  if (props.dataEntry.length > 0)
    expenseObj = props.dataEntry.map((obj, i) => (
      <Expense
        title={obj.description}
        date={obj.date}
        amount={obj.amount}
        key={`expense--${i}`}
        group={`group--${props.groups.indexOf(obj.group) + 1}`}
        id={obj.id}
        onDelete={props.onDelete}
      />
    ));

  return (
    <section className="expenses">
      <div className="expenses__header-box header">
        <h2 className="expenses__header">Your Expenses</h2>
        {/* <div className="expenses__total">
          Total:
          <span>
            £{" "}
            {props.dataEntry
              .map((expense) => Number(expense.amount))
              .reduce((a, c) => {
                return a + c;
              }, 0)}
          </span>
        </div> */}
      </div>

      <div className="expenses__container">
        <ul className="expenses__list">{expenseObj}</ul>
      </div>
    </section>
  );
}

export default Expenses;
