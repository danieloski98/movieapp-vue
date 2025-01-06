<template>
    <div class="w-full h-screen flex bg-[url('/assets/images/Background.png')] bg-cover bg-center bg-no-repeat">
        <div class="w-full h-full bg-[#121829] bg-opacity-100 px-[100px] overflow-y-auto">
            <Navbar />
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
import Navbar from '@/components/Navbar.vue';
</script>