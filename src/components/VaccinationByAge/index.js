// Write your code here
// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = ({data}) => (
  <div className="chart-container">
    <h1>Vaccination by Age</h1>

    <PieChart width={1000} height={300}>
      <Pie
        cx="70%"
        cy="40%"
        data={data}
        startAngle={0}
        endAngle={360}
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="18-44" fill="#2d87bb" />
        <Cell name="45-60" fill="#f54394" />
        <Cell name="Above 60" fill="#2cc6c6" />
      </Pie>
      <Legend iconType="circle" />
    </PieChart>
  </div>
)

export default VaccinationByGender
