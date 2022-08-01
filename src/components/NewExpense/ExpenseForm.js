import React, { useState } from "react"
import './ExpenseForm.css'
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  })
  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value }
    })
  }
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value }
    })
  }
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value }
    })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = { ...userInput, date: new Date(userInput.date) };
    setUserInput({
      title: '',
      amount: '',
      date: '',
    })
    props.onSaveExpenseData(expenseData);
  }
  return <form action="" onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label >Title</label>
        <input id="title" name="title" type="text" value={userInput.title} onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label >Amount</label>
        <input id="amount" name="amount" type="number" value={userInput.amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label >Date</label>
        <input id="date" name="date" type="date" value={userInput.date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="button" className="btn btn-close" onClick={props.closeForm}>Cancel</button>
      <button type="submit" className="btn" >Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm;