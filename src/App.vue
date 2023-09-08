<template>
  <CitySearch @change-name="onUpdateName" />
  <select v-model="unit">
    <option value="standard" selected>standard</option>
    <option value="metrics">Celcius</option>
    <option value="imperial">Fahrenheit</option>
  </select>
  <WeatherCard :weather="weather" />
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import CitySearch from "./components/CitySearch.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { useWeatherStore } from "./stores/Weather.js";

const weatherStore = useWeatherStore();
const weather = ref(0);
const city = ref("");
const unit = ref("");

const onUpdateName = (e) => {
  city.value = e.value;
  console.log("name changed", city.value);
  console.log("event result", e);
};
const getWeather = () => {
  console.log("fetchimg");
  weatherStore
    .fetchWeather(city.value, unit.value)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      weather.value = result;
      console.log(result);
    });
};

watch(city, (val) => {
  if (val != "") getWeather();
});

watch(unit, (_) => {
  console.log(_)
  getWeather()
})

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
