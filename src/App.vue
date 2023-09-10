<template>
  <div class="container">
    <CitySearch @change-name="onUpdateName" @unit-selected="onChangeUnit" />
    <WeatherCard :weather="weatherStore.weather" :unit="unitSign" />
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue";
import CitySearch from "./components/CitySearch.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { useWeatherStore } from "./stores/Weather.js";

const weatherStore = useWeatherStore();
// const weather = ref(0);
const city = ref("Cotonou");
const unit = ref("metric");

const onUpdateName = (e) => {
  city.value = e;
};

const onChangeUnit = (e) => {
  unit.value = e;
};

const getWeather = () => {
  console.log("fetchimg");
  weatherStore
    .fetchWeather(city.value, unit.value)
    .then((result) => {
      weatherStore.$patch({
        weather: result,
      });
      console.log(result)
    })
    .catch((error) => {
      console.log(error);
    });
};

const unitSign = computed(() => {
  return unit.value == "metric" ? "C" : "F"
});

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

<style></style>
