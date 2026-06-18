<script setup lang="ts">
import orangeFabric from '@/assets/images/orangefabric.png'
import ShoppingCart from '@/assets/images/ShoppingCart.png'
import Button from '@/components/ui/Button.vue'
import ProductColors from '@/components/more/ProductColors.vue'
import SliderBottom from '@/components/more/SliderBottom.vue'
</script>

<template>
  <section class="product-page">
    <div class="product-page__layout">
      <div class="product-page__gallery">
        <img
          class="product-page__main-image"
          :src="orangeFabric"
          alt="Оранжевая кулирная гладь"
        >

        <SliderBottom embedded static-view />
      </div>

      <div class="product-page__details">
        <nav class="product-page__breadcrumbs" aria-label="Хлебные крошки">
          <span>Главная</span>
          <span>Каталог</span>
          <strong>Кулирная гладь</strong>
        </nav>

        <h1 class="product-page__title">Кулирная гладь</h1>

        <p class="product-page__price">
          13,84$
          <span>/ кг</span>
        </p>

        <ProductColors class="product-page__colors" />

        <div class="product-page__actions">
          <div class="product-page__counter">
            <span>−</span>
            <span>10</span>
            <span>+</span>
          </div>

          <Button
            class="product-page__cart-button"
            theme="full"
            text="Добавить в корзину"
            :icon="ShoppingCart"
          />
        </div>
      </div>

      <aside class="product-page__specs">
        <h2 class="product-page__specs-title">Характеристики</h2>
        <dl class="product-page__specs-list">
          <div class="product-page__spec"><dt>Материал:</dt><dd>Материальный</dd></div>
          <div class="product-page__spec"><dt>Качество:</dt><dd>Хорошее</dd></div>
          <div class="product-page__spec"><dt>Состав:</dt><dd>92% хб + 8% лайкра</dd></div>
          <div class="product-page__spec"><dt>Плотность:</dt><dd>Плотная</dd></div>
          <div class="product-page__spec"><dt>Ширина рулона:</dt><dd>150 см</dd></div>
          <div class="product-page__spec"><dt>В 1 кг:</dt><dd>1 метр</dd></div>
          <div class="product-page__spec"><dt>В 1 рулоне:</dt><dd>1 рулон</dd></div>
          <div class="product-page__spec"><dt>Производство:</dt><dd>Турция</dd></div>
        </dl>
      </aside>
    </div>
  </section>
</template>

<style scoped lang="scss">
.product-page {
  width: min(1160px, calc(100% - 48px));
  margin: 0 auto;
  padding: 52px 0 70px;

  &__layout {
    display: grid;
    grid-template-columns:
      minmax(300px, 430px)
      minmax(250px, 330px)
      minmax(180px, 1fr);
    align-items: start;
    gap: clamp(20px, 3vw, 36px);
  }

  &__gallery {
    min-width: 0;
  }

  &__main-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    display: block;
    border-radius: 14px;
    object-fit: cover;
  }

  &__details {
    padding-top: 20px;
  }

  &__breadcrumbs {
    display: flex;
    align-items: center;
    gap: 13px;
    color: var(--gray-60);
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;

    span::after {
      content: '>';
      margin-left: 13px;
    }

    strong {
      color: var(--gray-80);
      font-weight: 500;
    }
  }

  &__title {
    margin: 30px 0 14px;
    color: var(--text-dark-color);
    font-size: 26px;
    font-weight: 600;
    line-height: 1.15;
  }

  &__price {
    margin: 0 0 24px;
    color: var(--darkGold);
    font-size: 24px;
    font-weight: 600;

    span {
      margin-left: 6px;
      color: var(--gray-80);
      font-size: 11px;
      font-weight: 400;
    }
  }

  &__actions {
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  &__counter {
    position: relative;
    z-index: 1;
    height: 54px;
    padding: 0 25px 0 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 28px;
    background-color: var(--surface-color);
    color: var(--gray-80);

    span:first-child,
    span:last-child {
      font-size: 20px;
    }

    span {
      min-width: 18px;
      font-size: 14px;
      text-align: center;
    }
  }

  &__cart-button {
    position: relative;
    z-index: 2;
    width: 215px;
    height: 54px;
    margin-left: -18px;
    padding: 0 22px;
    gap: 20px;
    border-radius: 28px;

    :deep(.btn__text) {
      font-size: 12px;
      white-space: nowrap;
    }

    :deep(.btn__icon) {
      width: 20px;
      height: 20px;
    }
  }

  &__specs {
    padding-top: 142px;
  }

  &__specs-title {
    margin: 0 0 16px;
    color: var(--text-dark-color);
    font-size: 17px;
    font-weight: 500;
  }

  &__specs-list {
    margin: 0;
  }

  &__spec {
    display: grid;
    grid-template-columns: 105px 1fr;
    gap: 10px;
    padding: 3px 0;
    font-size: 11px;
    line-height: 1.25;

    dt {
      color: var(--text-dark-color);
      font-weight: 600;
    }

    dd {
      margin: 0;
      color: var(--gray-80);
    }
  }
}

@include tablet {
  .product-page {
    width: calc(100% - 32px);
    padding: 34px 0 44px;

    &__layout {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1.12fr);
      grid-template-areas:
        "gallery details"
        "gallery specs";
      gap: 0 22px;
    }

    &__gallery {
      grid-area: gallery;
    }

    &__details {
      grid-area: details;
      padding-top: 0;
    }

    &__breadcrumbs {
      gap: 7px;
      font-size: 8px;
      letter-spacing: 1px;

      span::after {
        margin-left: 7px;
      }
    }

    &__title {
      margin: 24px 0 12px;
      font-size: 20px;
    }

    &__price {
      margin-bottom: 18px;
      font-size: 20px;
    }

    &__actions {
      margin-top: 18px;
      align-items: stretch;
      flex-direction: column;
    }

    &__counter {
      order: 2;
      width: 94px;
      height: 38px;
      margin-top: 8px;
      padding: 0 12px;
      justify-content: space-between;
    }

    &__cart-button {
      width: 220px;
      height: 48px;
      margin: 0;
    }

    &__specs {
      grid-area: specs;
      padding-top: 14px;
    }

    &__specs-list {
      display: block;
    }

    &__spec {
      grid-template-columns: 90px 1fr;
      font-size: 10px;
    }
  }
}

@include mobile {
  .product-page {
    width: calc(100% - 24px);
    padding: 24px 0 40px;

    &__layout {
      grid-template-columns: 1fr;
      grid-template-areas: none;
      gap: 16px;
    }

    &__details {
      display: contents;
    }

    &__breadcrumbs {
      grid-row: 1;
      overflow: hidden;
      white-space: nowrap;
    }

    &__gallery {
      grid-row: 2;
      grid-area: auto;
    }

    &__title,
    &__price,
    &__colors,
    &__actions {
      grid-column: 1;
    }

    &__title {
      grid-row: 3;
      margin: 0;
      font-size: 20px;
    }

    &__price {
      grid-row: 4;
      margin-bottom: 4px;
    }

    &__colors {
      grid-row: 5;
    }

    &__specs {
      grid-row: 6;
      grid-area: auto;
      padding-top: 4px;
    }

    &__actions {
      grid-row: 7;
      margin-top: 0;
    }

    &__cart-button {
      width: 100%;
    }

    &__counter {
      width: 100%;
    }

    &__specs-list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
