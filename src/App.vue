<template>
  <CitySearch @change-name="onUpdateName" @select-unit="onChangeUnit"/>
  <WeatherCard :weather="weatherStore.weather" />
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import CitySearch from "./components/CitySearch.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { useWeatherStore } from "./stores/Weather.js";

const weatherStore = useWeatherStore();
// const weather = ref(0);
const city = ref("Cotonou");
const unit = ref("");

const onUpdateName = (e) => {
  city.value = e.value;
  console.log("name changed", city.value);
  console.log("event result", e);
};

const onChangeUnit = (e) => {
  unit.value = e.value;
  console.log("unit change", unit.value);
  console.log("unit event", e);
};

const getWeather = () => {
  console.log("fetchimg");
  weatherStore
    .fetchWeather(city.value, unit.value)
    .then()
    .catch((error) => {
      console.log(error);
    });
};

watch(city, (val) => {
  if (val != "") getWeather();
});

watch(unit, (_) => {
  console.log(_);
  getWeather();
});

onMounted(() => {
  getWeather();
});
</script>

<style>

</style>
