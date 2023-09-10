import { defineStore } from "pinia";

// const apiKey = process.env.VUE_APP_API_KEY;
// const apiKey = '6452ac286a14e3d7ed762086fb7c35e0'

// const cityName = 'France'
const baseUrl = process.env.VUE_APP_API_URL;
// const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weather: {},
  }),

  actions: {
    async fetchWeather(cityName, unit) {
      console.log("url", baseUrl);
      const data = await fetch(
        `${baseUrl}${cityName}&appid=${'6452ac286a14e3d7ed762086fb7c35e0'}&units=${unit}`
      ).then((response) => {
        console.log(response);
        if (response.status == 404) {
          throw new Error(
            "Le pays ou la ville que vous avez demandé n'existe pas. Veuillez revoir la saisie et réessayer"
          );
        } else if (response.status == 404) {
          throw new Error(
            "Une erreur est survenue! Merci de réessayer plus tard"
          );
        }
        return response.json();
      });

      return data;
    },
  },
});
