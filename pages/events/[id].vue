<script setup lang="ts">
const router = useRoute();

console.log(router);
</script>

<template>
    <div>
        id is {{ $route.params.id }}
    </div>
</template>