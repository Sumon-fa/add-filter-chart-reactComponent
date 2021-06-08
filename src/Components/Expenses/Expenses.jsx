import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";

import "./Expenses.css";
function Expenses(props) {
  const [filteredYear, setYear] = useState("2020");
  function filterChangHandler(selectedYear) {
    setYear(selectedYear);
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
    </Card>
  );
}
export default Expenses;
