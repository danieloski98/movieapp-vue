<template>
    <div class="w-full h-full pt-[100px] font-montserrat">
        <h1 class="font-[900] text-white text-4xl">MoviezA</h1>
        <p class="text-gray-500 mt-3 text-md w-[600px]">
            List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉
        </p>
        <SearchBox :modelValue="searchFieldState" />
        <Tab />
    </div>
</template>

<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue';
import Tab from '@/components/Tab.vue';

// states
const searchFieldState = useState('searchFieldState', () => '');
</script>