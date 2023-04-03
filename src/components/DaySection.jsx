import React from 'react'
import Day from './Day'
import NumaricalData from './NumaricalData'
import { useSelector } from 'react-redux'

function DaySection() {
    const { weather, isSuccess } = useSelector(state => state.weather)
    if (isSuccess) {
        // console.log(weather.days);
        const data = weather.days
        return (
            <section class="gradient-day remove-scroll box-4 p-4 text-white overflow-y-scroll h-screen">
                <NumaricalData />
                <div class="daily flex flex-wrap justify-center sm:justify-between">
                    {/* <FirstDay/> */}
                    {
                        data.map(item=><Day day={item} />)
                    }

                </div>
            </section>

        )
    }
}

export default DaySection