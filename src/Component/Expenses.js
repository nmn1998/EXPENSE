import React, { useState } from "react";
import Card from "./UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpensesItem.css";
import ExpenseChart from "./ExpenseChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenseYear = props.items.filter((element) => {
    return element.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenseYear} />
        <ExpensesList items={filteredExpenseYear} />
      </Card>
    </div>
  );
};

export default Expenses;
