<template>
  <div class="w-[344px] h-[64px] rounded-xl border-[1px] border-gray-500 flex items-center px-5 text-gray-500 mt-12 bg-[#323B54]">
    <Icon name="ri:search-2-line" color='white' size='20' />
    <input 
      class="flex bg-transparent flex-1 ml-5" 
      placeholder='Search for movie and TV series'
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style>

</style>