import React from 'react'
import { useSelector } from 'react-redux'

function NumaricalData() {
    const { weather, isSuccess } = useSelector(state => state.weather)
    if (isSuccess) {
        const {humidity,windspeed,snowdepth,uvindex,cloudcover,visibility,pressure } = weather.currentConditions
        return (
            <div class="flex-col flex items-center mt-5">
                <div class="flex justify-around w-full border rounded-xl border-white py-1 text-lg mt-2">
                    <img class="w-6" src="./imgs/wind speed.png" alt="" />
                    <p id="asdfasdf" class="cursor-pointer">Wind Speed</p>
                    <p class="">-</p>
                    <p class=""><span id="windSpeed">{windspeed}</span>km/h</p>
                </div>
                <div class="flex justify-around w-full border rounded-xl border-white py-1 text-lg  mt-2">
                    <img class="w-6" src="./imgs/humidity.png" alt="" />
                    <p class="">Humidity</p>
                    <p class="">-</p>
                    <p class=""><span>{humidity}</span>%</p>

                </div>
                <div class="flex justify-around w-full border rounded-xl border-white py-1 text-lg mt-2">
                    <img class="w-6" src="./imgs/snow.png" alt="" />
                    <p class=""> Snow depth</p>
                    <p class="">-</p>
                    <p class=""><span id="snow">{snowdepth}</span> Meter</p>
                </div>
                <div class="flex justify-around w-full border rounded-xl border-white py-1 text-lg mt-2">
                    <img class="w-6" src="./imgs/cloud.png" alt="" />
                    <p class=""> cloudcover </p>
                    <p class="">-</p>
                    <p class=""><span id="cloudcover">{cloudcover}</span>%</p>
                </div>
                <div class="flex justify-around w-full border rounded-xl border-white py-1 text-lg mt-2">
                    <img class="w-6" src="./imgs/pressure-256.gif" alt="" />
                    <p class="">Pressure</p>
                    <p class="">-</p>
                    <p class=""><span id="pressure">{pressure}</span> mb</p>
                </div>
                <div class="flex justify-around w-full border rounded-xl border-white py-1 text-lg mt-2">
                    <img class="w-6" src="./imgs/eye-3-48.png" alt="" />
                    <p class="">Visiblity</p>
                    <p class="">-</p>
                    <p class=""><span id="visiblity">{visibility}</span> km</p>
                </div>
                <div class="flex justify-around w-full border rounded-xl border-white py-1 text-lg mt-2">
                    <img class="w-6" src="./imgs/sun-2-256.png" alt="" />
                    <p class="">UV Index</p>
                    <p class="">-</p>
                    <p class=""><span id="uvIndex">{uvindex}</span></p>
                </div>
            </div>
        )
    }
}

export default NumaricalData