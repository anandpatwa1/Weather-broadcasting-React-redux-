import React from 'react'

function FirstDay() {
  return (
    <div id=""
    class="flex border border-white mt-2 rounded-b-xl items-center justify-center  sm:justify-between p-3">
    <div class="flex ">
        <p class="text-6xl sm:text-[200px] font-thin leading-none ">22</p>
        <p class="mt-9 text-lg sm:text-2xl">℃</p>
    </div>
    <div class=" flex flex-col justify-between h-36 mx-2 items-center w-28">
        <div class="text-center">
            <p class="">Highest Temp.</p>
            <p id=""><span id="">32</span>℃</p>
        </div>
        <p class="my-4">Feelslike:- <span id="">24</span>℃</p>
        <div class="text-center">
            <p class="">Highest Temp.</p>
            <p id=""><span id="">32</span>℃</p>
        </div>
    </div>
    <div class=" flex flex-col items-center h-40 justify-between">
        <p class="border-b border-x border-white rounded-lg p-2 w-24 text-center">Tomorow</p>
        <div class="flex justify-around w-full my-5">
            <div class="">
                <p class="">Humidity- <span id="">07</span></p>
                <p class="">Humidity- <span id="">07</span></p>
            </div>
            <div class="">
                <p class="">Humidity- <span id="">07</span></p>
                <p class="">Humidity- <span id="">07</span></p>
            </div>
        </div>
        <p class="text-center px-4">Similar temperatures continuing with no rain expected.</p>
    </div>
    <div class=" flex flex-col justify-between items-end pr-2">
        <img class="w-16 mb-12"
            src="data:image/png;base64,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"
            alt=""/>
        <div class="">
            <p class="">Sunrise:- <span id="">07:43:23</span></p>
            <p class="">Sunset:- <span id="">06:43:23</span></p>
        </div>
    </div>
</div>
  )
}

export default FirstDay