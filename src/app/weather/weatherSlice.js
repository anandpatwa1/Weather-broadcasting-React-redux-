import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    weather: []
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.weather = action.payload
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.isLoading = false
                state.isError = true
            })
    }
})

export const fetchWeather = createAsyncThunk('fetch/product', async (city) => {
    // const key = 'B44US8RVER5JCGA6WGXX26NVP'
    const key = '2YY4J397H96XV2CR6A2RQ7LPE'
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${key}&contentType=json`)
    const data = await response.json()
    return data
})

export default weatherSlice.reducer