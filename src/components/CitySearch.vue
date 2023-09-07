<template>
    <div>
        <form action="">
            <input type="text" v-model="cityName">
        </form>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
    const cityName = ref('')
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  