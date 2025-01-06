<template>
  <div>
    <p>{{ counter }}</p>
    <button @click="counter++">Increment</button>
    <button @click="counter--">Decrement</button>
  </div>
</template>

<script lang="ts" setup>
const counter: Ref<number> = useState('counter');
  definePageMeta({
  layout: 'dashboard',
})
</script>

<style>

</style>