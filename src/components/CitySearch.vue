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
      <button><IconSearch size="12"/></button>
    </div>
    <div class="filter">
      <select @change="onChangeUnit" v-model="unit">
        <option value="" disabled selected>Filtrer par unité de mesure</option>
        <option value="metric">Celcius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  </div>

  <!-- <div class="filter-box">
    <div class="name-box">
      <input
        @keypress.enter="onSubmit"
        placeholder="Rechercher par nom de ville..."
        type="text"
        v-model="cityName"
      />
      <button @click="onSubmit" :disabled="cityName == ''">Rechercher</button>
    </div>

    <div class="select-box">
      <select @change="onChangeUnit" v-model="unit">
        <option value="" disabled selected>Filtrer par unité de mesure</option>
        <option value="metric">Celcius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
    </div>
  </div> -->
</template>

<script setup>
import { IconSearch } from "@tabler/icons-vue";
import { ref, defineEmits } from "vue";

const emit = defineEmits(["changeName", "unitSelected"]);
const cityName = ref("");
const unit = ref("");

const onSubmit = () => {
  let city = cityName.value;
  emit("changeName", city);
  resetName();
};

// 90685648

const resetName = () => {
  cityName.value = "";
};

const onChangeUnit = () => {
  console.log("emit unit", unit);
  emit("unitSelected", unit.value);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
