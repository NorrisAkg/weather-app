<template>
  <div class="weather-body">
    <img class="sun-moon" src="./../assets/images/sun.svg" alt="" />
    <div class="date">
      <h1 class="day">
        <!-- Display current day to capitalize case -->
        {{ currentDay.charAt(0).toUpperCase() + currentDay.slice(1) }}
      </h1>
      <h2 class="month-year">{{ currentDate }}</h2>
    </div>
    <div class="temperature">
      <!-- City box -->
      <div class="city">
        <span>
          <IconMapPin />
        </span>
        <h3 class="city-name">{{ props.weather?.name || "xxxxx" }}</h3>
      </div>
      <!-- Display current temperature according to selected unit -->
      <div class="current-temperature">
        <h3>
          <span>{{ parseInt(props.weather?.main?.temp) || "--" }}</span>
          <sup>{{ props.unit == "metric" ? "&#8451;" : " &#8457; " }}</sup>
        </h3>
      </div>
      <!-- Display min and max temperature according to selected unit -->
      <div class="min-max-temperature">
        <span class="min-temp"
          >min&nbsp;:&nbsp;{{ parseInt(props.weather?.main?.temp_min) || "--"
          }}<sup>{{
            props.unit == "metric" ? "&#8451;" : " &#8457; "
          }}</sup></span
        >
        <span class="max-temp"
          >max&nbsp;:&nbsp;{{ parseInt(props.weather?.main?.temp_max) || "--"
          }}<sup>{{
            props.unit == "metric" ? "&#8451;" : " &#8457; "
          }}</sup></span
        >
      </div>
    </div>

    <!-- Other weather informations box -->
    <div class="weather-infos">
      <ul class="infos-list">
        <li>
          <span class="title">
            <IconSunrise size="15" class="icon" /> Heure du levée du soleil </span
          ><span class="value sunrise">{{ sunriseHour || "--:--" }}</span>
        </li>
        <li>
          <span class="title">
            <IconSunset size="15" class="icon" /> Heure du couchée du soleil </span
          ><span class="value sunset">{{ sunsetHour || "--:--" }}</span>
        </li>
        <li>
          <span class="title">Humidité</span
          ><span class="value himidity"
            >{{ props.weather?.main?.humidity || "--" }} &#37;</span
          >
        </li>
        <li>
          <span class="title">Pression du vent</span
          ><span class="value pressure"
            >{{ props.weather?.main?.pressure || "---" }} Pa</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { formatTimestamp, getTimestampHour } from "@/utils/formatter";
import { IconMapPin, IconSunset, IconSunrise } from "@tabler/icons-vue";
import { defineProps, computed } from "vue";

const props = defineProps(["weather", "unit"]);

const currentDay = computed(() => {
  return formatTimestamp(props.weather?.sys?.sunset).toLocaleDateString(
    `fr-${props.weather?.sys?.country}`,
    { weekday: "long" }
  );
});

const currentDate = computed(() => {
  return formatTimestamp(props.weather?.sys?.sunset).toLocaleDateString(
    `fr-${props.weather?.sys?.country}`,
    { day: "2-digit", month: "long", year: "numeric" }
  );
});

const sunsetHour = computed(() => {
  let sunset = props.weather?.sys?.sunset;
  let hour = getTimestampHour(sunset, props.weather?.sys?.country);
  return sunset ? `${hour[0]}:${hour[1]}` : "";
});

const sunriseHour = computed(() => {
  let sunrise = props.weather?.sys?.sunrise;
  let hour = getTimestampHour(sunrise, props.weather?.sys?.country);
  return sunrise ? `${hour[0]}:${hour[1]}` : "";
});
</script>
