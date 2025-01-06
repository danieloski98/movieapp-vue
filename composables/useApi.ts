export function useApi() {
    const config = useRuntimeConfig()

    async function fetchMovies(page: number) {
        return await useFetch(`${config.public.apiBase}discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`, {
            query: { page },
            headers: {
                'Authorization': `Bearer ${config.public.apiKey}`
            }
        })
    }

    return {
        fetchMovies
    }
} 