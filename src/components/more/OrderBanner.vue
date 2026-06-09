<!-- components/home/OrderBanner.vue -->
<script setup lang="ts">
import Title from '@/components/ui/Title.vue'
import Button from '@/components/ui/Button.vue'
import arrowIcon from '@/assets/images/ArrowRight.png'
</script>

<template>
  <div class="order-banner">
    <div class="order-banner__content">
      <Title 
        tag="p"
        theme="left"
        class="order-banner__text"
      >
        Подробнее об условиях окраса под заказ можно<br>
        уточнить у вашего персонального менеджера
      </Title>
      
      <!-- Кнопка справа -->
      <Button 
        theme="full"
        text="Оставить заявку"
        :icon="arrowIcon"
        class="order-banner__button"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.order-banner {
  width: 1160px;
  height: 170px;
  background-color: #f5f5f5;
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
    font-size: 24px;
    font-weight: 600;
    color: #1a1f29;
    max-width: 600px;
    line-height: 1.3;
  }

  &__button {
    flex-shrink: 0;
  }
}
</style>