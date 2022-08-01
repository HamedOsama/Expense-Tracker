import { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const initialExpenses = [{
  id: 'e1',
  title: 'Toilet Paper',
  amount: 94.12,
  date: new Date(2020, 7, 14),
},
{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
{
  id: 'e3',
  title: 'Car Insurance',
  amount: 294.67,
  date: new Date(2021, 2, 28),
},
{
  id: 'e4',
  title: 'New Desk (Wooden)',
  amount: 450,
  date: new Date(2021, 5, 12),
},
]
const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const onNewExpenseHandler = (enteredExpenseData) => {
    setExpenses(prev => [enteredExpenseData, ...prev]);
  }
  const onDeleteExpenseHandler = (expenseID) => {
    const id = expenses.findIndex(el => el.id === expenseID);
    expenses.splice(id, 1);
    setTimeout(() => setExpenses(() => [...expenses]), 500)
  }
  return (
    <div>
      <NewExpense onNewExpense={onNewExpenseHandler} />
      <Expense onDeleteExpense={onDeleteExpenseHandler} items={expenses} />
    </div>
  );
}
export default App;
