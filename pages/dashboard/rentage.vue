<template>
  <div>
    <p>The counter value {{ counter }}</p>
  </div>
</template>

<script lang="ts" setup>
const counter = useState('counter', () => 100);
  definePageMeta({
  layout: 'dashboard',
})
</script>

<style>

</style>