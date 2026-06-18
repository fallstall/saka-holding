
<script setup lang="ts">
defineProps<{
  icon?: string
  title: string
  description: string
}>()
</script>
<template>
  <div class="info-card">
    <div class="info-card__icon">
      <img :src="icon" :alt="title" class="info-card__icon-img" />
    </div>
    <h3 class="info-card__title">{{ title }}</h3>
    <p class="info-card__description">{{ description }}</p>
  </div>
</template>



<style scoped lang="scss">
.info-card {
  background-color: var(--bg-color);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 320px;
  width: 260px;
  height: 337px;
  box-sizing: border-box;
  
  &__icon {
    margin-bottom: 30px;
    
    &-img {
      width: 64px;
      height: 64px;
    }
  }

  &__title {
    margin-bottom: 19px;
    letter-spacing: 8%;
    font-size: 14px;
  }

  &__description {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: var(--black-color);
    margin: 0;
  }
}

@include tablet {
  .info-card {
    width: 100%;
    max-width: none;
    height: auto;
    min-height: 245px;
    padding: 22px 16px;

    &__icon {
      margin-bottom: 16px;

      &-img {
        width: 52px;
        height: 52px;
      }
    }

    &__title {
      margin: 0 0 12px;
      max-width: 100%;
      overflow-wrap: anywhere;
      font-size: 12px;
    }

    &__description {
      font-size: 11px;
      line-height: 1.4;
    }
  }
}

@include mobile {
  .info-card {
    min-height: 0;
    padding: 22px 16px;

    &__icon {
      margin-bottom: 14px;
    }
  }
}
</style>
