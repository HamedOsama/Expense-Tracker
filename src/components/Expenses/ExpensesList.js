import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'
const ExpensesList = props => {
  if (props.items.length === 0)
    return <h2 className="expenses-list__fallback">No expenses Found</h2>
  return (
    <ul className="expenses-list">
      {props.items.map(el => {
        return <ExpenseItem key={el.id} id={el.id} onDeleteExpense={props.onDeleteExpense}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      })}
    </ul>
  )
};
export default ExpensesList;