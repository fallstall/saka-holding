<script setup lang="ts">
import Title from '@/components/ui/Title.vue'
import ShoppingCart from '@/assets/images/ShoppingCart.png'
import SliderBottom from './SliderBottom.vue';
import Button from '../ui/Button.vue';
import TitlePage from '../TitlePage.vue';
import SubtitlePage from '../SubtitlePage.vue';
import orange from '@/assets/images/orange.png'
import palettetwo from '@/components/ui/palette/palettetwo.vue';
</script>

<template>
  <div class="product-page">
    <div class="product-page__breadcrumbs">
      <SubtitlePage subtitle="ГЛАВНАЯ > КАТАЛОГ >"/>
      <TitlePage title="КУЛИНАРНАЯ ГЛАДЬ"/>
    </div>
    
    <div class="product-page__content">
      <div class="product-page__slider">
        <img 
          :src="orange" 
          alt="Кулирная гладь" 
          class="product-page__main-image"
        />
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
          <palettetwo /> 
          
        </div>

        <div class="product-page__actions">
          <!-- Заглушка для счётчика -->
          <div style="display:flex; align-items:center; gap:12px; background:#f5f5f5; border-radius:50px; padding:0 16px; height:48px;">
            <button style="background:none; border:none; font-size:20px; cursor:pointer;">−</button>
            <span style="font-weight:600;">10</span>
            <button style="background:none; border:none; font-size:20px; cursor:pointer;">+</button>
          </div>
          
          <Button
            class="product-page__button"
            theme="full"
            text="Добавить в корзину"
            :icon="ShoppingCart"
          />
        </div>
      </div>

      <!-- Характеристики (справа) -->
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

<style scoped lang="scss">
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
    justify-content: space-between;
  }

  &__slider {
    flex: 1.2;
    min-width: 300px;
  }

  &__main-image {
    width: 100%;
    height: 460px;
    border-radius: 16px;
    object-fit: cover;
    margin-bottom: 16px;
  }

  &__info {
    flex: 1;
    min-width: 280px;
  }

  &__title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__price {
    font-size: 26px;
    font-weight: 600;
    color: var(--gold-color);
    margin-bottom: 23px;

    &-unit {
      font-size: 12px;
      font-weight: 400;
      color: var(--gray-80);
    }
  }

  &__specs {
    flex: 1;
    min-width: 250px;
  }

  &__specs-title {
    font-size: 20px;
    font-weight: 550;
    color: var(--black);
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
    font-size: 12px;
  }

  &__spec-label {
    font-weight: 600;
    color: var(--black);
  }

  &__spec-value {
    color: var(--gray-80);
  }
}
</style>