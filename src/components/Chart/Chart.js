import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart({ dataPoints }) {
  const dataPoinitValues = dataPoints.map((dataPoints) => dataPoints.value);
  const totalMaximum = Math.max(...dataPoinitValues);

  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
