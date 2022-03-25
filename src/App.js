import React, { useState, useEffect } from "react";

import Banner from "./components/Banner/Banner";
import Breakdown from "./components/Breakdown/Breakdown";
import Overview from "./components/Overview/Overview";
import Expenses from "./components/Expenses/Expenses";
import CreateExpense from "./components/CreateExpense/CreateExpense";

function App() {
  const [expensesData, setExpensesData] = useState([]);
  const [yearFilter, setYearFilter] = useState(new Date().getFullYear());
  const groups = [
    "Housing & Utilities",
    "Food",
    "Transport",
    "Entertainment",
    "Others",
  ];

  useEffect(() => {
    localStorage.expensesData &&
      setExpensesData(JSON.parse(localStorage.expensesData));
  }, []);

  useEffect(() => {
    localStorage.expensesData = JSON.stringify(expensesData);
  }, [expensesData]);

  const filteredData = expensesData
    .filter((expense) => new Date(expense.date).getFullYear() === yearFilter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const yearTotal = filteredData
    .map((obj) => Number(obj.amount))
    .reduce((a, c) => {
      return a + c;
    }, 0);

  const addExpenseHandler = (data) => {
    setExpensesData((prev) => [...prev, data]);
    setYearFilter(new Date(data.date).getFullYear());
  };

  const yearFilterHandler = (e) => {
    setYearFilter(Number(e.target.value));
  };

  const deleteHandler = (id) => {
    setExpensesData((prev) => prev.filter((obj) => obj.id !== id));
  };

  return (
    <div className="app">
      <div className="main">
        <div className="main__wrapper">
          <Banner
            onChange={yearFilterHandler}
            value={yearFilter}
            dataEntry={expensesData}
          />
          <Breakdown dataEntry={filteredData} yearTotal={yearTotal} />
          <Overview
            amount={yearTotal}
            dataEntry={filteredData}
            groups={groups}
          />
          <Expenses
            selectedYr={yearFilter}
            dataEntry={filteredData}
            groups={groups}
            onDelete={deleteHandler}
          />
          <CreateExpense onAddExpense={addExpenseHandler} groups={groups} />
        </div>
      </div>
    </div>
  );
}

export default App;
