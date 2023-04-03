import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWeather } from '../app/weather/weatherSlice'

function Home() {
    const [city , setCity] = useState("indore")
    const { weather , isSuccess} = useSelector(state => state.weather)
    const dispatch = useDispatch()

    const handlesubmit =(e)=>{
        e.preventDefault()
        dispatch(fetchWeather(city))
    }
    
    const handleClick =(city)=>{
        
        dispatch(fetchWeather(city))
    }
    
    
    useEffect(() => {
        dispatch(fetchWeather("Indore"))
    }, [])
        if(isSuccess){
            // console.log(weather.currentConditions)
           const data = weather
    return (
        <>
            <section className="gradient-day bg-opacity-50 remove-scroll box-3 p-4 text-white overflow-y-scroll h-screen">
                <div className="flex justify-around text-lg">
                    <p onClick={()=>handleClick("Indore")} className="border-b hover:scale-110 transition px-2">Indore</p>
                    <a onClick={()=>handleClick("Bhopal")} className="border-b hover:scale-110 transition px-2">Bhopal</a>
                    <p onClick={()=>handleClick("Delhi")} className="border-b hover:scale-110 transition px-2">Delhi</p>
                    <p onClick={()=>handleClick("Mumbai")} className="hidden sm:block border-b hover:scale-110 transition px-2">Mumbai</p>
                    <p onClick={()=>handleClick("Manali")} className="border-b hover:scale-110 transition px-2">Manali</p>
                </div>
                <form onSubmit={(e)=>handlesubmit(e)} className="flex  justify-center mt-6">
                    <input onChange={(e)=>setCity(e.target.value)} 
                        className="text-center pb-1 w-72 mr-3 bg-transparent border-b border-white h-full focus:border-b outline-none "
                         type="text" placeholder="Any city name" />
                    <button className="px-3 border border-white h-full" type="submit">Enter</button>
                </form>
                <div className="flex w-full justify-around my-5">
                    <p className="">
                        This resuls shown for :-
                        <span> {data.resolvedAddress}</span>
                    </p>
                    {/* <p>Time <span>{Date(weather.currentConditions.datetimeEpoch)}</span></p> */}
                    <p>Time <span>{weather.currentConditions.datetime}</span></p>
                </div>
                <div className="sm:flex justify-between mt-8 md:mt-12">
                    <div className="hidden sm:flex flex-col justify-between items-center w-full">
                        <div className="text-center">
                            <p className="">Lowest Temp.</p>
                            <p><span>{data.days[0].tempmin}</span>℃</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-24" id="icon" alt="" />
                            <p className="mt-3"><span>{data.currentConditions.icon}</span></p>
                            <p className="mt-3">Condition <span>{data.currentConditions.conditions}</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full ">
                        <div className="flex">
                            <p className="text-[200px] font-thin leading-none ">{data.currentConditions.temp}</p>
                            <p className="mt-9 text-2xl">℃</p>
                        </div>
                        <p className="text-center">{data.description}</p>
                    </div>
                    <div className="flex  w-full">
                        <div className="sm:hidden flex flex-col justify-between items-center w-full">
                            <div className="text-center my-4">
                                <p className="">Lowest Temp.</p>
                                <p><span>{data.days[0].tempmin}</span>℃</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <img className="w-24" id="icon"
                                    src="data:image/png;base64,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"
                                    alt="" />
                                <p className="mt-3">icon <span>{data.currentConditions.icon}</span></p>
                                <p className="mt-3">Condition <span>{data.currentConditions.conditions}</span></p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-center  w-full">
                            <div className="text-center mr-7 my-4">
                                <p className="">Highest Temp.</p>
                                <p><span>{data.days[0].tempmax}</span>℃</p>
                            </div>
                            <div className="mt-5">
                                <p>Feelslike:- <span>{data.currentConditions.feelslike} </span> ℃</p>
                                <p>Sunrise:- <span>{data.currentConditions.sunrise}</span></p>
                                <p>Sunset:- <span>{data.currentConditions.sunset}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}}

export default Home