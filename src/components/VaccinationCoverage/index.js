import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'

const VaccinationCoverage = ({data}) => (
  <div className="chart-container">
    <h1>Vaccination Coverage</h1>
    <BarChart data={data} width={1000} height={300}>
      <XAxis dataKey="vaccine_date" />
      <YAxis />
      <Legend
        wrapperStyle={{
          padding: 30,
        }}
      />
      <Bar
        fill="#2d87bb"
        name="Dose 1"
        dataKey="dose_1"
        radius={[10, 10, 0, 0]}
      />
      <Bar
        fill="#f54394"
        name="Dose 2"
        dataKey="dose_2"
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  </div>
)

export default VaccinationCoverage
