<template>
  <div class="w-full h-full p-5">
    <div v-for="(link, index) in links">
      <div class="h-16 border-b-[1px] border-b-gray-300 flex flex-col justify-center">
        <NuxtLink active-class="bg-gray-200 h-full pt-4" :to="link.link" >{{ link.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const links: Array<{title: string, link: string}> = [
    {
      title: 'Home',
      link: '/dashboard/'
    },
    {
      title: 'Buiding for Rent',
      link: '/dashboard/rentage'
    },
    {
      title: 'Listings',
      link: '/dashboard/listings'
    },
    {
      title: 'Investments',
      link: '/dashboard/investments'
    },
    {
      title: 'Wallet',
      link: '/dashboard/wallet'
    },
    {
      title: 'Settings',
      link: '/dashboard/settings'
    },
  ];
</script>

<style>

</style>