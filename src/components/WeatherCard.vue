<template>
  <div class="body-meteo">
    <img class="sun-moon" src="./../assets/images/sun.svg" alt="" />
    <div class="date">
      <h1 class="day">Vendredi</h1>
      <h2 class="month-year">Décembre 2023</h2>
    </div>
    <div class="temperature">
      <div class="city">
        <h3>{{ (props.weather?.name) ?? "XXXXX" }}</h3>
      </div>
      <div class="current-temperature">
        <h3>{{ parseInt(props.weather?.main?.temp )?? "XXXXX" }}<sup>{{  props.unit == 'metric' ?'&#8451;'  :'	&#8457; '}}</sup></h3>
      </div>
      <div class="min-max-temperature">
        <span>min&nbsp;:&nbsp;{{ props.weather?.main?.temp_min ?? "-----" }}<sup>{{  props.unit == 'metric' ?'&#8451;'  :'	&#8457; '}}</sup></span>
        <span>max&nbsp;:&nbsp;{{ props.weather?.main?.temp_max ?? "-----" }}<sup>{{  props.unit == 'metric' ?'&#8451;'  :'	&#8457; '}}</sup></span>
      </div>
    </div>

    <div class="weather-infos">
      <ul class="infos-list">
        <li>
          <span class="title">Titre</span><span class="value">Value</span>
        </li>
        <li>
          <span class="title">Titre</span><span class="value">Value</span>
        </li>
        <li>
          <span class="title">Titre</span><span class="value">Value</span>
        </li>
        <li>
          <span class="title">Titre</span><span class="value">Value</span>
        </li>
        <li>
          <span class="title">Titre</span><span class="value">Value</span>
        </li>
      </ul>
    </div>
  </div>

  <!-- <div class="infos-content">
    <div class="infos-setion temp">
      <h2 class="city-name">
        <IconMapPin /> <span>{{ props.weather?.name ?? "XXXXX" }}</span>
      </h2>
      <p>
        <IconTemperature />
        <span style="font-weight: 700"
          >Température actuelle: {{ props.weather?.main?.temp ?? "-----" }} °{{
            props.unit
          }}</span
        >
      </p>
      <p>
        <IconTemperatureMinus />
        <span style="font-weight: 700"
          >Prévision minimale:
          {{ props.weather?.main?.temp_min ?? "-----" }} °{{ props.unit }}</span
        >
      </p>
      <p>
        <IconTemperaturePlus />
        <span style="font-weight: 700"
          >Prévision maximale:
          {{ props.weather?.main?.temp_max ?? "-----" }} °{{ props.unit }}</span
        >
      </p>
    </div>
    <div class="infos-setion temp">
      <div class="sun-block">
        <img src="./../assets/images/sun.svg" width="100" height="100" alt="" />
      </div>
      <p>
        <IconSunrise />
        <span style="font-weight: 700">Heure de levée: {{ sunsetHour }}</span>
      </p>

      <p>
        <IconSunset />
        <span style="font-weight: 700"
          >Heure du couché: {{ sunriseHour }}
        </span>
      </p>
    </div>
  </div> -->
</template>

<script setup>
// import { formatTimestamp } from "@/utils/formatter";
// import { IconTemperaturePlus } from "@tabler/icons-vue";
// import { IconSunrise } from "@tabler/icons-vue";
// import { IconSunset } from "@tabler/icons-vue";
// import { IconTemperature, IconTemperatureMinus } from "@tabler/icons-vue";
// import { IconTemperatureCelsius } from "@tabler/icons-vue";
// import { IconMapPin } from "@tabler/icons-vue";
// import { IconCloudFilled } from "@tabler/icons-vue";
import { defineProps, onMounted } from "vue";
const props = defineProps(["weather", "unit"]);

// const sunriseHour = computed(() => {
//   return formatTimestamp(props.weather?.sys?.sunrise);
// });

// const sunsetHour = computed(() => {
//   return formatTimestamp(props.weather?.sys?.sunset);
// });

onMounted(() => {
  console.log(props.weather);
  console.log("unit " + props.unit);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
