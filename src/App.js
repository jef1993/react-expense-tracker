import Banner from "./components/Banner/Banner";
import Breakdown from "./components/Breakdown/Breakdown";
import Overview from "./components/Overview/Overview";
import Expenses from "./components/Expenses/Expenses";
import CreateExpense from "./components/CreateExpense/CreateExpense";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Banner username="username" year="2022" />
        <Breakdown />
        <Overview />
        <Expenses />
        <CreateExpense />
      </div>
    </div>
  );
}

export default App;
