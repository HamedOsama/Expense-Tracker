import Chart from "../Chart/Chart";

const ExpensesChart = props => {
  const ChartPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]
  props.expenses.forEach(expense => {
    const month = expense.date.getMonth();
    ChartPoints[month].value += expense.amount;
  })
  return <Chart chartsValue={ChartPoints} />
};

export default ExpensesChart