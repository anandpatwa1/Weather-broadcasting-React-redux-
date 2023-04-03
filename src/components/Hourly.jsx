import React from 'react'

function Hourly({hours , day}) {
  return (
    <div class=" bg-black text-white h-16 rounded-r-2xl mb-3 flex justify-between items-center px-3">
            <div class="">
                <p><span class="text-3xl">{hours.temp}</span>℃</p>
                <div class="flex">
                    <p class="text-xs mr-3">{hours.datetime}</p>
                    <p id="hour-0-date" class="text-xs">{day.datetime}</p>
                </div>
            </div>
            {/* <img src="" alt=""/> */}
            <p>{day.conditions}</p>
        </div>
  )
}

export default Hourly