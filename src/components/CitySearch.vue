<template>
  <div class="filter-box">
    <div class="name-box">
      <input placeholder="Rechercher par nom (pays, ville,...)" type="text" v-model="cityName" />
      <button @click="onSubmit" :disabled="cityName == ''">Rechercher</button>
    </div>

    <div class="select-box">
      <select placeholder="Filtrer par unité" @change="onChangeUnit" v-model="unit">
        <option value="" disabled selected>Filtrer par unité</option>
        <option value="metrics">Celcius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["changeName", "unitSelected"]);
const cityName = ref("");
const unit = ref("");

const onSubmit = () => {
  emit("changeName", cityName);
  cityName.value = "";
};

const onChangeUnit = () => {
  emit("unitSelected", unit);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
