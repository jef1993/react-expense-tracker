import React from "react";

const ExpensesContext = React.createContext({
  data: [],
  seletctedYear: new Date().getFullYear(),
  filteredData: [],
});

export default ExpensesContext;
