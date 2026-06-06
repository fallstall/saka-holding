<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="phone">
    <div class="phone__top-cont">
      <img
        class="phone__icon"
        src="./../../assets/images/PhoneCall.png"
        alt=""
      >

      <div class="phone__bot-cont">
        <p class="phone__number">
          +90 212 547 08 26
        </p>

        <RouterLink class="phone__login-link" to="/">
          Заказать звонок
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"> 
.phone {
    display: flex;
    flex-direction: row;
    flex: 0 0 auto;

    &__top-cont {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    &__bot-cont {
        display: flex;
        flex-direction: column;
    }

    &__icon {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }

    &__number {
        margin: 0;
        color: white;
        font-size: 23px;
        font-weight: 500;
        line-height: 1;
        letter-spacing: 0.6px;
    }

    &__login-link {
        align-self: flex-end;
        margin-top: 7px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 13px;
        font-weight: 400;
        line-height: 1;
        text-decoration: underline;
        text-underline-offset: 2px;
    }
}
  @include laptop {
    .phone {
      display: none;
      
    }
}
</style>
