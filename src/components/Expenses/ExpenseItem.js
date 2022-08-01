import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
const ExpenseItem = props => {
  const deleteExpenseHandler = (e) => {
    const target = e.target.closest('.expense-item')
    if (target.id !== props.id)
      return;
    target.classList.add('delete');
    props.onDeleteExpense(target.id);
  }
  return (
    <li>
      <Card className="expense-item" id={props.id}>
        <div className="delete-btn" onClick={deleteExpenseHandler}>x</div>
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price"> $ {props.amount} </div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
