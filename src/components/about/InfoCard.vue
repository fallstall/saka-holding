
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
    font-weight: 400px;
    color: var(--black-color);
    margin: 0;
  }
}
</style>