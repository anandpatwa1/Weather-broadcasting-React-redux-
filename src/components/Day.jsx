import React from 'react'

function Day({day}) {
    const {conditions , datetime , temp ,tempmin , tempmax , windspeed , feelslike , sunrise, sunset, description } = day
    return (
        <div id="dayOne"
        class=" gradient cursor-pointer w-full sm:w-[46%] lg:w-[30%] h-96 border rounded-b-xl border-white text-lg mt-2 flex flex-col justify-between space-y-4 py-3">
        <p class="text-center">{datetime}</p>
        <div class="flex">
            <p  class="text-center w-1/2">{conditions}</p>
            <div class="flex flex-col items-center justify-around  w-1/2">
                <div class="flex">
                    <p class="text-4xl font-thin leading-none ">{temp}</p>
                    <p class="">℃</p>
                </div>
                <div class="flex justify-around w-full">
                    <p><span>{tempmin}</span>℃</p>
                    <p><span>{tempmax}</span>℃</p>
                </div>
            </div>
        </div>
        <div class="flex justify-around">
            <p><i class="fa-solid fa-wind"></i> <span></span>{windspeed}km</p>
            <p>Feelslike <span></span>{feelslike}℃</p>
        </div>
        <div class="flex justify-around">
            <p><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    class="bi bi-sunrise-fill" viewBox="0 0 16 16">
                    <path
                        d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                </svg><span>{sunrise}</span></p>
            <p><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                    class="bi bi-sunset-fill" viewBox="0 0 16 16">
                    <path
                        d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                </svg><span>{sunset}</span></p>
        </div>
        <p class="text-center px-4">{description}</p>
    </div>
    )
}

export default Day