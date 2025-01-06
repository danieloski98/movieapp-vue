<template>
  <div class="h-[80px] w-full flex justify-between items-center font-montserrat ">

    <div>
      <img src="/assets/images/icon.png" class='w-[40px] h-[40px]' />
    </div>

    <div class="flex ">
      <p v-for="(item, index) in items" class="text-white font-[900] mr-10">
        <NuxtLink :to="item.link" :class="{ 'text-primary': $route.path === item.link }">{{ item.title }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>

const items: Array<{ title: string, link: string}> = [
  { title: 'Movies', link: '/' },
  { title: 'TV Shows', link: '/tvshows' },
  { title: 'Suggest me', link: '/suggestions' }
]

</script>

<style>
/* You can also define global font styles here */
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}
</style>
