<template>
    <div>
        <form @submit.prevent = onSubmit>
            <input type="text" v-model="cityName" @input="onChangeCityName">
            <button type="submit" :disabled="cityName == ''">Rechercher</button>
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'

const onChangeCityName = () => {
    console.log(cityName.value)
}
const emit = defineEmits(['changeName'])
    const cityName = ref('')

const onSubmit = () => {
    emit('changeName', cityName)
    cityName.value = ''
    console.log(cityName.value)
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  