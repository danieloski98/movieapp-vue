<template>
    <div class="w-full h-full pt-[100px] font-montserrat">
        <h1 class="font-[900] text-white text-4xl">MoviezA</h1>
        <p class="text-gray-500 mt-3 text-md w-[600px]">
            List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉
        </p>
        <SearchBox v-model="searchFieldState" />
        <Tab />

        <!-- Movies Grid -->
        <div class="mt-12 grid grid-cols-4 gap-1">
            <template v-if="!pending">
                <MovieCard
                    v-for="movie in moviesData"
                    :key="movie.id"
                    :title="movie.title"
                    :poster_path="movie.poster_path"
                    :popularity="movie.popularity"
                    :id="movie.id"
                    :overview="movie.overview"
                />
            </template>
            <template v-else>
                <div v-for="n in 8" :key="n" class="w-[250px] h-[400px] rounded-xl bg-gray-800 animate-pulse" />
            </template>
        </div>

        <!-- Error State -->
        <div v-if="error" class="mt-12 text-red-500">
            Failed to load movies. Please try again later. {{  error }}
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue';
import Tab from '@/components/Tab.vue';
import MovieCard from '@/components/MovieCard.vue';
import type { IMovie } from '~/models/movie';

// states
const searchFieldState = useState('searchFieldState', () => '');
const moviesData = useState('movies', () => [] as Array<IMovie>);

// api
const { fetchMovies } = useApi();

// fetch movies
const { data: movies, pending, error } = await fetchMovies();

moviesData.value = [...moviesData.value, ...movies.value.results]

</script>