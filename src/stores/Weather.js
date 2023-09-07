import { defineStore } from "pinia";

const apiKey = process.env.VUE_APP_API_KEY
// const apiKey = '6452ac286a14e3d7ed762086fb7c35e0'
const cityName = 'France'
const baseUrl = process.env.VUE_APP_API_URL
// const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

export const useWeatherStore = defineStore('weather', {
    state: () => {

    },

    actions: {
        async fetchWeather() {
            console.log(process.env)
            console.log('url',baseUrl)
            const data = await fetch(`${baseUrl}${cityName}&appid=${apiKey}`)

            console.log(data);

            return data;
        }
    }
})