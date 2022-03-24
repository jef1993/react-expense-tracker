import React, { useState } from "react";

import shortenNum from "./components/functions";
import Banner from "./components/Banner/Banner";
import Breakdown from "./components/Breakdown/Breakdown";
import Overview from "./components/Overview/Overview";
import Expenses from "./components/Expenses/Expenses";
import CreateExpense from "./components/CreateExpense/CreateExpense";

function App() {
  const [expensesData, setExpensesData] = useState([]);
  const [yearFilter, setYearFilter] = useState(
    new Date().getFullYear().toString()
  );

  const filteredData = expensesData.filter(
    (expense) => expense.date.split("-")[0] === yearFilter
  );
  const yearTotal = filteredData
    .map((obj) => Number(obj.amount))
    .reduce((a, c) => {
      return a + c;
    }, 0);

  const overviewAmount = shortenNum(yearTotal);

  const addExpenseHandler = (data) => {
    setExpensesData((prev) => [...prev, data]);
    setYearFilter(data.date.split("-")[0]);
  };

  const yearFilterHandler = (e) => {
    setYearFilter(e.target.value);
  };

  return (
    <div className="app">
      <div className="main">
        <div className="main__wrapper">
          <Banner
            username="username"
            onChange={yearFilterHandler}
            value={yearFilter}
          />
          <Breakdown expenses={filteredData} yearTotal={yearTotal} />
          <Overview amount={overviewAmount} />
          <Expenses selectedYr={yearFilter} expenses={filteredData} />
          <CreateExpense onAddExpense={addExpenseHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
