import Hourly from './Hourly'
import { useSelector } from 'react-redux'

function HourSection() {
  const { weather, isSuccess } = useSelector(state => state.weather)

  if (isSuccess) {
    // console.log(weather.days[0].hours);
    const data = weather.days[0].hours
    const day = weather.days[0]
    return (
      <section class="dayscroll remove-scroll box-2 hidden md:block px-2 pr-4 md:p-4 overflow-y-scroll ">
        <div class="flex md:block">

         {
          data.map(item => <Hourly hours={item} day={day}/>)
         }

        </div>
      </section>
    )
  }
}

export default HourSection