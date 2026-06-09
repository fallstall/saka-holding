<script setup lang="ts">
import Title from '@/components/ui/Title.vue'
import Button from '@/components/ui/Button.vue'
import arrowIcon from '@/assets/images/ArrowRight.png'
</script>

<template>
  <div class="order-banner">
    <div class="order-banner__content">
      <Title 
        text="Подробнее об условиях окраса под заказ можно уточнить у вашего персонального менеджера"
        theme="center"
        class="order-banner__text"
      />
      <Button
        class="order-banner__button"
        theme="full"
        text="Оставить заявку"
        :icon="arrowIcon"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-banner {
  width: 1160px;
  height: 170px;
  background-color:var(--gray);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  
  &__content {
    max-width: 1000px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
  }

  &__text {
    font-size: 20px;
    max-width: 650px;
    text-align: left;
  }

  &__button {
    width: 310px;
    height: 60px;
  :deep(.btn__text) {
    font-size: 16px;
    white-space: nowrap;
  }
  }
}
</style>
