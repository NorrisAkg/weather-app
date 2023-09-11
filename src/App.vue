<template>
  <div class="container">
    <CitySearch @change-name="onUpdateName" @unit-selected="onChangeUnit" />
    <WeatherCard :weather="weatherStore.weather" :unit="unit" />
    <!-- Error box to display error when occured -->
    <div class="error-box" v-if="errorOccured">{{ error?.toString().split(': ')[1] }}</div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import CitySearch from "./components/CitySearch.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { useWeatherStore } from "./stores/Weather.js";

const weatherStore = useWeatherStore();
const city = ref("Cotonou");
const unit = ref("metric");
const errorOccured = ref(false);
const error = ref("");

/**
 * Handle city changing
 * @param {*} e 
 */
const onUpdateName = (e) => {
  city.value = e;
};

/**
 * Handle unit changing
 * @param {*} e 
 */
const onChangeUnit = (e) => {
  unit.value = e;
};

const getWeather = () => {
  useWeatherStore()
    .fetchWeather(city.value, unit.value)
    .then((result) => {
      weatherStore.$patch({
        weather: result,
      });
    })
    .catch((err) => {
      errorOccured.value = true;
      error.value = err;
    })
    .finally(() => {
      setTimeout(() => {
        errorOccured.value = false;
        error.value = '';
      }, 2500);
    });
};

watch(city, (val) => {
  if (val != "") getWeather();
});

watch(unit, () => {
  getWeather();
});

onMounted(() => {
  getWeather();
});
</script>

<style></style>
