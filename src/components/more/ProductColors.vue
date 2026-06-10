<script setup lang="ts">
import black from '@/assets/images/t-shirts/black.png'
import blue from '@/assets/images/t-shirts/blue.png'
import darkBlue from '@/assets/images/t-shirts/dark-blue.png'
import darkGrey from '@/assets/images/t-shirts/dark-grey.png'
import green from '@/assets/images/t-shirts/green.png'
import grey from '@/assets/images/t-shirts/grey.png'
import lightBlue from '@/assets/images/t-shirts/light-blue.png'
import orange from '@/assets/images/t-shirts/orange.png'
import purple from '@/assets/images/t-shirts/purple.png'
import red from '@/assets/images/t-shirts/red.png'
import white from '@/assets/images/t-shirts/white.png'
import yellow from '@/assets/images/t-shirts/yellow.png'
</script>

<template>
  <div class="product-colors">
    <h2 class="product-colors__title">Цвет</h2>
    <div class="product-colors__grid">
      <img :src="darkBlue" alt="Тёмно-синий">
      <img :src="grey" alt="Серый">
      <img :src="white" alt="Белый">
      <img :src="black" alt="Чёрный">
      <img :src="darkGrey" alt="Тёмно-серый">
      <img :src="blue" alt="Синий">
      <img :src="lightBlue" alt="Голубой">
      <img class="product-colors__active" :src="orange" alt="Оранжевый">
      <img :src="green" alt="Зелёный">
      <img :src="yellow" alt="Жёлтый">
      <img :src="purple" alt="Фиолетовый">
      <img :src="red" alt="Красный">
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-colors {
  &__title {
    margin: 0 0 10px;
    color: var(--text-dark-color);
    font-size: 16px;
    font-weight: 500;
  }

  &__grid {
    width: 205px;
    display: grid;
    grid-template-columns: repeat(6, 26px);
    gap: 8px;

    img {
      width: 26px;
      height: 24px;
      display: block;
      object-fit: contain;
    }
  }

  &__active {
    filter: drop-shadow(0 0 2px var(--darkGold));
  }
}
</style>
