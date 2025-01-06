<template>
  <div class="relative w-[350px] h-[450px] rounded-xl overflow-hidden cursor-pointer group mb-8">
    <!-- Movie Poster -->
   <div class="w-full h-[200ppx]">
    <img 
      :src="imageUrl" 
      :alt="title"
      class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
    />
   </div>
    
    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
      <!-- Rating Star -->
      <div class="absolute top-4 left-4 flex items-center gap-1">
        <Icon name="material-symbols:star-rounded" color="#FFD700" size="20" />
        <span class="text-white font-bold">{{ popularity }}</span>
      </div>
      
      <!-- Movie Info -->
      <div class="absolute bottom-4 left-4 right-4">
        <h3 class="text-white font-montserrat font-bold text-xl mb-2">{{ title }}</h3>
        <!-- <div class="flex items-center gap-2 text-gray-300 text-sm">
          <span>{{ year }}</span>
          <span>•</span>
          <span>{{ duration }}</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// defineProps<{
//  id: number
//   overview: string
//   title: string
//   poster_path: string
//   popularity: number
// //   year: number
// //   duration: string
// }>()

const props = defineProps<{
  id: number
  overview: string
  title: string
  poster_path: string
  popularity: number
}>();

const config = useRuntimeConfig();
const imageUrl = `${config.public.imageBaseUrl}/original${props.poster_path}`;
console.log(imageUrl)
console.log(`this is from env ${config.public.imageBaseUrl}`);
</script> 