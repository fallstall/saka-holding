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

@include tablet {
  .order-banner {
    width: min(100% - 32px, 608px);
    height: auto;
    min-height: 170px;
    padding: 24px;
    border-radius: 8px;

    &__content {
      padding: 0;
      align-items: flex-start;
      flex-direction: column;
      gap: 18px;
    }

    &__text {
      width: 100%;
      max-width: 360px;
      margin: 0;
      font-size: 16px;
    }

    &__button {
      width: 210px;
      height: 44px;

      :deep(.btn__text) {
        font-size: 12px;
      }
    }
  }
}

@include mobile {
  .order-banner {
    width: calc(100% - 40px);
    padding: 22px 16px;

    &__text {
      font-size: 14px;
    }

    &__button {
      width: 100%;
    }
  }
}
</style>
