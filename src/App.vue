<template>
  <CitySearch />
  <WeatherCard />
</template>

<script setup>
import { onMounted } from "vue";
import CitySearch from "./components/CitySearch.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { useWeatherStore } from "./stores/Weather.js";

const weatherStore = useWeatherStore();
// const weather = ref(0);

const getWeather = () => {
  weatherStore
    .fetchWeather()
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    });
};

onMounted(() => {
  getWeather();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
