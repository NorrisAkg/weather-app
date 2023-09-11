<template>
  <div class="header">
    <div class="search">
      <label title="recherche"
        ><input
          type="text"
          placeholder="Rechercher par nom de ville..."
          @keypress.enter="onSubmit"
          v-model="cityName"
      /></label>
      <button @click="onSubmit"><IconSearch size="12" /></button>
    </div>
    <div class="filter">
      <select @change="onChangeUnit" v-model="unit">
        <option value="" disabled selected>Filtrer par unité de mesure</option>
        <option value="metric">Celcius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { IconSearch } from "@tabler/icons-vue";
import { ref, defineEmits } from "vue";

const emit = defineEmits(["changeName", "unitSelected"]);
const cityName = ref("");
const unit = ref("");

/**
 * Emit city change event
 */
const onSubmit = () => {
  let city = cityName.value;
  emit("changeName", city);
  resetName();
};

/**
 * Reset city value
 */
const resetName = () => {
  cityName.value = "";
};

/**
 * Emit unit change event
 */
const onChangeUnit = () => {
  emit("unitSelected", unit.value);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
