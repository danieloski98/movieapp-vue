export function useApi() {
    const config = useRuntimeConfig()

    async function fetchMovies() {
        return await useFetch(`${config.public.apiBase}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, {
            // query: { search: query },
            headers: {
                'Authorization': `Bearer ${config.public.apiKey}`
            }
        })
    }

    return {
        fetchMovies
    }
} 