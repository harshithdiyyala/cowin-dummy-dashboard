import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'

const FailureView = () => (
  <>
    <h1>Something went wrong</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="failure view"
    />
  </>
)

const CowinDashboard = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://apis.ccbp.in/covid-vaccination-data',
      )
      const responseData = await response.json()

      if (response.status === 200) setData(responseData)
      else setData(false)
    }

    if (data === '') getData()
  }, [data])

  const renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  const renderData = () => (
    <>
      {data === false ? (
        <FailureView />
      ) : (
        <div className="data-container">
          <VaccinationCoverage data={data.last_7_days_vaccination} />
          <VaccinationByGender data={data.vaccination_by_gender} />
          <VaccinationByAge data={data.vaccination_by_age} />
        </div>
      )}
    </>
  )

  return (
    <>
      <div className="cowin-dashboard-container">
        <div className="title-data-container">
          <div className="title-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <h1>Co-WIN</h1>
          </div>
          <h1>CoWIN Vaccination in India</h1>
        </div>
        {data === '' ? renderLoader() : renderData()}
      </div>
    </>
  )
}

export default CowinDashboard
