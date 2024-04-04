// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'

const VaccinationByGender = ({data}) => (
  <div className="chart-container">
    <h1>Vaccination by Gender</h1>

    <PieChart width={1000} height={300}>
      <Pie
        cx="70%"
        cy="40%"
        data={data}
        startAngle={0}
        endAngle={180}
        innerRadius="40%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="Male" fill="#fecba6" />
        <Cell name="Female" fill="#b3d23f" />
        <Cell name="Others" fill="#2cc6c6" />
      </Pie>
      <Legend iconType="circle" />
    </PieChart>
  </div>
)

export default VaccinationByGender
