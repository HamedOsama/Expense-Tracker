import React, { useState } from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, id: Math.random().toString(),
    }
    props.onNewExpense(expenseData);
    closeFormHandler();
  }
  const [currentFormState, setCurrentFormState] = useState(false)
  const openFormHandler = function (e) {
    setCurrentFormState(true)
  }
  const closeFormHandler = () => {
    setCurrentFormState(false)
  }
  return (
    <div className="new-expense" >
      {
        !currentFormState && <button className="btn-open" onClick={openFormHandler}>Add New Expense</button>
      }
      {
        currentFormState && <ExpenseForm closeForm={closeFormHandler} onSaveExpenseData={onSaveExpenseDataHandler} />
      }
    </div>
  )
}

export default NewExpense