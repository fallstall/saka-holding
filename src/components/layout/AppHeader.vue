<script setup lang="ts">
import Logo from '@/components/ui/Logo.vue';
import Emblem from '@/components/header/Emblem.vue';
import Button from '@/components/ui/Button.vue';
import arrowIcon from '@/assets/images/cart.png'


</script>

<template>
  <div class="header__top">
    <Logo />

    <Emblem />
    
    <div>
      <span>Производитель турецкого </span>
    </div>

    <Button theme="icon" :icon="arrowIcon" class="header__cart-button"/>
  </div>

</template>

<style scoped lang="scss">
  .header{
    width: 1400px;
    height: 220px;
    &__cart-button {
      width: 43px;
      height: 43px;
      background-color: var(--black-80-color);
    }
    &__top {
      background-color: var(--black-color);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;
      gap: 20px;



      
    }
  }

</style>