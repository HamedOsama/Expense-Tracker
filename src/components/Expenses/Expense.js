import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import './Expense.css'
const Expense = props => {
  const [year, setYear] = useState('2020')
  const onChangeYearHandler = (year) => {
    setYear(year)
  }
  const filteredExpenses = props.items.filter(el => +year === el.date.getFullYear())
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={year} onChangeYear={onChangeYearHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} onDeleteExpense={props.onDeleteExpense} />
    </Card>
  );
}

export default Expense;
