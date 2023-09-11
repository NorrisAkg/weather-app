import { defineStore } from "pinia";

const apiKey = process.env.VUE_APP_API_KEY;
const baseUrl = process.env.VUE_APP_API_URL;

export const useWeatherStore = defineStore("weather", {
  state: () => ({
    weather: {},
  }),

  actions: {
    /**
     * Fetch weather infos according to given city
     * @param {*} cityName
     * @param {*} unit
     * @returns
     */
    async fetchWeather(cityName, unit) {
      console.log("url", baseUrl);
      console.log("api key", apiKey);
      const data = await fetch(
        `${baseUrl}${cityName}&appid=${apiKey}&units=${unit}`
      ).then((response) => {
        if (response.status == 404) {
          throw new Error(
            "La ville que vous avez demandé n'existe pas. Veuillez revoir la saisie et réessayer"
          );
        } else if (response.status == 404 || response.status == 401) {
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
