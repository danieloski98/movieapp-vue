<template>
  <div class="w-[365px] h-[65px] p-4 rounded-xl flex items-center justify-between mt-12 bg-[#000000] bg-opacity-50">
    <button 
      v-for="(item, index) in items" 
      @click="onClick(item.id)" 
      :class="[
        'flex-1 py-2 rounded-lg transition-colors font-[700]',
        active === item.id ? 'bg-primary text-white' : 'text-gray-500'
      ]"
    >
      {{ item.title }}
    </button>
  </div>
</template>

<script lang="ts" setup>

// states and values
const active = useState('active', () => 1);

const items: Array<{ id: number, title: string}> = [
  {
    id: 1,
    title: 'All'
  },
  {
    id: 2,
    title: 'Movies'
  },
  {
    id: 3,
    title: 'TV Shows'
  },
];

// functions

function onClick(val: number) {
  active.value = val;
}
</script>

<style>

</style>