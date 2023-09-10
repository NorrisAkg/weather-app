<template>
  <div class="infos-content">
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
        <span style="font-weight: 700"
          >Heure de levée:
          {{ sunsetHour }}</span
        >
      </p>

      <p>
        <IconSunset />
        <span style="font-weight: 700"
          >Heure du couché:
          {{ sunriseHour }} </span
        >
      </p>
      
    </div>
  </div>
</template>

<script setup>
import { formatTimestamp } from "@/utils/formatter";
import { IconTemperaturePlus } from "@tabler/icons-vue";
import { IconSunrise } from "@tabler/icons-vue";
import { IconSunset } from "@tabler/icons-vue";
import { IconTemperature, IconTemperatureMinus } from "@tabler/icons-vue";
// import { IconTemperatureCelsius } from "@tabler/icons-vue";
import { IconMapPin } from "@tabler/icons-vue";
// import { IconCloudFilled } from "@tabler/icons-vue";
import { defineProps, computed, onMounted } from "vue";
const props = defineProps(["weather", "unit"]);

const sunriseHour = computed(() => {
  return formatTimestamp(props.weather?.sys?.sunrise);
});

const sunsetHour = computed(() => {
  return formatTimestamp(props.weather?.sys?.sunset);
});

onMounted(() => {
  console.log(props.weather);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
