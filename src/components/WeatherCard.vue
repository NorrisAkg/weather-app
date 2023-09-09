<template>
  <div class="infos-content">
    <div class="infos-setion temp">
      <h2 class="city-name">{{ props.weather?.name }}</h2>
      {{ props.weather?.main?.temp }}
    </div>
    <div class="infos-setion">
      {{ sunriseHour }}
    </div>
    <div class="infos-setion">
      {{ sunrsetHour }}
    </div>
  </div>
</template>

<script setup>
import { formatTimestamp } from "@/utils/formatter";
import { defineProps, computed } from "vue";
const props = defineProps(["weather"]);

const sunriseHour = computed(() => {
  return props.weather?.sys?.sunrise;
});

const sunrsetHour = computed(() => {
  return formatTimestamp(props.weather?.sys?.sunrise);
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
