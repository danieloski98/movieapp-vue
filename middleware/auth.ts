export default defineNuxtRouteMiddleware((to, from) => {
    console.log('The middle ware was called')
    navigateTo(to.path);
})