import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = props => {
  const dataPointValues = props.chartsValue.map(el => el.value)
  const maxValue = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.chartsValue.map(el => <ChartBar key={el.label} value={el.value} maxValue={maxValue} label={el.label} />)}
    </div>
  )
};

export default Chart;