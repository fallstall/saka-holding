<script setup lang="ts">
import testImage from '@/assets/images/PhoneCall.png'
</script>

<template>
  <main class="home">
    <h1>Это главная страница</h1>

    <img
      class="home__image"
      :src="testImage"
      alt=""
    >
  </main>
</template>

<style scoped lang="scss">
.home {
  padding: 40px;
  background-color: pink;

  &__image {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
}
</style>