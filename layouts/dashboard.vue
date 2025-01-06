<script setup lang="ts">
import Sidebar from '~/components/Sidebar.vue';

</script>

<template>
  <div class="w-full h-screen flex bg-white p-5 gap-2">
      <div class="w-[20%] h-full">
        <Sidebar />
      </div>
      <div class="flex-1 bg-gray-200 rounded-2xl shadow p-5">
          <slot />
      </div>
  </div>
</template>