<script setup lang="ts">
import Title from '@/components/ui/Title.vue'
import arrowIcon from '@/assets/images/ArrowRight.png'
import SliderBottom from './SliderBottom.vue';
import Button from '../ui/Button.vue';
import TitlePage from '../TitlePage.vue';
import SubtitlePage from '../SubtitlePage.vue';

</script>

<template>
  <div class="product-page">
    <div class="product-page__breadcrumbs">
        <SubtitlePage subtitle="ГЛАВНАЯ > КАТАЛОГ >"/>
        <TitlePage title="КУЛИНАРНАЯ ГЛАДь"/>
    </div>
    
    <div class="product-page__content">
      <div class="product-page__slider">
        <SliderBottom />
      </div>

      <div class="product-page__info">
        <Title 
          text="Кулирная гладь" 
          theme="left" 
          class="product-page__title"
        />
        
        <p class="product-page__price">
          13,84$ <span class="product-page__price-unit">/кг</span>
        </p>

        <div class="product-page__colors">
          <p class="product-page__colors-label">Цвет</p>
          <TShirtColors />
        </div>

        <div class="product-page__actions">
          <Counter />
          <Button 
            theme="full"
            text="Добавить в корзину"
            :icon="arrowIcon"
            class="product-page__button"
          />
        </div>
      </div>

      <div class="product-page__specs">
        <Title 
          text="Характеристики" 
          theme="left" 
          class="product-page__specs-title"
        />
        <ul class="product-page__specs-list">
          <li class="product-page__spec-item">
            <span class="product-page__spec-label">Материал:</span>
            <span class="product-page__spec-value">Материальный</span>
          </li>
          <li class="product-page__spec-item">
            <span class="product-page__spec-label">Качество:</span>
            <span class="product-page__spec-value">Хорошее</span>
          </li>
          <li class="product-page__spec-item">
            <span class="product-page__spec-label">Состав:</span>
            <span class="product-page__spec-value">92%хб+8%лайкра</span>
          </li>
          <li class="product-page__spec-item">
            <span class="product-page__spec-label">Плотность:</span>
            <span class="product-page__spec-value">Плотная</span>
          </li>
          <li class="product-page__spec-item">
            <span class="product-page__spec-label">Ширина рулона:</span>
            <span class="product-page__spec-value">150см²</span>
          </li>
          <li class="product-page__spec-item">
            <span class="product-page__spec-label">в 1кг:</span>
            <span class="product-page__spec-value">1 метр</span>
          </li>
          <li class="product-page__spec-item">
            <span class="product-page__spec-label">в 1 рулоне:</span>
            <span class="product-page__spec-value">1 рулон</span>
          </li>
          <li class="product-page__spec-item">
            <span class="product-page__spec-label">Производство:</span>
            <span class="product-page__spec-value">Турция</span>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</template>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  
  &__breadcrumbs {
    margin-bottom: 24px;
  }

  &__content {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }

  &__slider {
    flex: 1;
    min-width: 300px;
  }

  &__info {
    flex: 1;
    min-width: 300px;
  }

  &__title {
    font-size: 32px;
    font-weight: 700;
    color: #1a1f29;
    margin-bottom: 16px;
  }

  &__price {
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #1a1f29;
    margin-bottom: 24px;

    &-unit {
      font-size: 16px;
      font-weight: 400;
      color: #6b7280;
    }
  }

  &__colors {
    margin-bottom: 32px;
    
    &-label {
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      font-weight: 600;
      color: #1a1f29;
      margin-bottom: 12px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  &__button {
    width: 260px;
    height: 48px;
  }

  &__specs {
    flex: 1;
    min-width: 250px;
  }

  &__specs-title {
    font-size: 24px;
    font-weight: 700;
    color: #1a1f29;
    margin-bottom: 16px;
  }

  &__specs-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__spec-item {
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
  }

  &__spec-label {
    font-weight: 600;
    color: #1a1f29;
  }

  &__spec-value {
    color: #6b7280;
  }
}
</style>