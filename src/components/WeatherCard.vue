<template>
  <div>
    <div style="height: 100px; width: 100px; border: 1px solid">
      {{ props.weather.main.temp }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["weather"]);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
