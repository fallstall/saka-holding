<script setup lang="ts">
import { computed, ref } from 'vue'

import blueFabric from '@/assets/images/bluefabric.png'
import greenFabric from '@/assets/images/greenfabric.png'
import orangeFabric from '@/assets/images/orangefabric.png'
import ShoppingCart from '@/assets/images/ShoppingCart.png'
import whiteFabric from '@/assets/images/whitefabric.png'
import black from '@/assets/images/t-shirts/black.png'
import blue from '@/assets/images/t-shirts/blue.png'
import darkBlue from '@/assets/images/t-shirts/dark-blue.png'
import darkGrey from '@/assets/images/t-shirts/dark-grey.png'
import green from '@/assets/images/t-shirts/green.png'
import grey from '@/assets/images/t-shirts/grey.png'
import lightBlue from '@/assets/images/t-shirts/light-blue.png'
import orange from '@/assets/images/t-shirts/orange.png'
import purple from '@/assets/images/t-shirts/purple.png'
import red from '@/assets/images/t-shirts/red.png'
import white from '@/assets/images/t-shirts/white.png'
import yellow from '@/assets/images/t-shirts/yellow.png'
import Button from '@/components/ui/Button.vue'

const gallery = [
  { image: orangeFabric, alt: 'Оранжевая кулирная гладь' },
  { image: whiteFabric, alt: 'Белая кулирная гладь' },
  { image: greenFabric, alt: 'Зелёная кулирная гладь' },
  { image: blueFabric, alt: 'Голубая кулирная гладь' },
]

const colors = [
  darkBlue,
  grey,
  white,
  black,
  darkGrey,
  blue,
  lightBlue,
  orange,
  green,
  yellow,
  purple,
  red,
]

const specifications = [
  ['Материал:', 'Материальный'],
  ['Качество:', 'Хорошее'],
  ['Состав:', '92% хб + 8% лайкра'],
  ['Плотность:', 'Плотная'],
  ['Ширина рулона:', '150 см'],
  ['В 1 кг:', '1 метр'],
  ['В 1 рулоне:', '1 рулон'],
  ['Производство:', 'Турция'],
]

const activeIndex = ref(0)
const currentImage = computed(() => gallery[activeIndex.value]!)

function showPrevious() {
  activeIndex.value = (activeIndex.value - 1 + gallery.length) % gallery.length
}

function showNext() {
  activeIndex.value = (activeIndex.value + 1) % gallery.length
}
</script>

<template>
  <section class="product-page">
    <div class="product-page__layout">
      <div class="product-page__gallery">
        <img
          class="product-page__main-image"
          :src="currentImage.image"
          :alt="currentImage.alt"
        >

        <div class="product-page__thumbnails">
          <button
            class="product-page__arrow product-page__arrow--previous"
            type="button"
            aria-label="Предыдущая ткань"
            @click="showPrevious"
          >
            <span aria-hidden="true"></span>
          </button>

          <button
            v-for="(item, index) in gallery"
            :key="item.image"
            class="product-page__thumbnail"
            :class="{ 'product-page__thumbnail--active': index === activeIndex }"
            type="button"
            @click="activeIndex = index"
          >
            <img :src="item.image" :alt="item.alt">
          </button>

          <button
            class="product-page__arrow product-page__arrow--next"
            type="button"
            aria-label="Следующая ткань"
            @click="showNext"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>
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

        <div class="product-page__colors">
          <h2>Цвет</h2>
          <div class="product-page__color-grid">
            <button
              v-for="(color, index) in colors"
              :key="color"
              class="product-page__color"
              :class="{ 'product-page__color--active': index === 7 }"
              type="button"
              :aria-label="`Цвет ${index + 1}`"
            >
              <img :src="color" alt="">
            </button>
          </div>
        </div>

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
          <div
            v-for="[label, value] in specifications"
            :key="label"
            class="product-page__spec"
          >
            <dt>{{ label }}</dt>
            <dd>{{ value }}</dd>
          </div>
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

  &__thumbnails {
    position: relative;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 14px;
  }

  &__thumbnail {
    aspect-ratio: 1 / 1;
    min-width: 0;
    padding: 0;
    overflow: hidden;
    border: 2px solid transparent;
    border-radius: 12px;
    background: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }

    &--active {
      border-color: var(--gold-color);
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background-color: var(--bg-color);
    cursor: pointer;
    transform: translateY(-50%);

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-top: 2px solid var(--black-color);
      border-left: 2px solid var(--black-color);
    }

    &--previous {
      left: -18px;

      span {
        transform: translate(-35%, -50%) rotate(-45deg);
      }
    }

    &--next {
      right: -18px;

      span {
        transform: translate(-65%, -50%) rotate(135deg);
      }
    }
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

  &__colors {
    h2 {
      margin: 0 0 10px;
      color: var(--text-dark-color);
      font-size: 16px;
      font-weight: 500;
    }
  }

  &__color-grid {
    width: 205px;
    display: grid;
    grid-template-columns: repeat(6, 26px);
    gap: 8px;
  }

  &__color {
    width: 26px;
    height: 24px;
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }

    &--active {
      filter: drop-shadow(0 0 2px var(--darkGold));
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
      color: var(--gray-80);
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
    padding: 34px 0 50px;

    &__layout {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 28px 22px;
    }

    &__details {
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
      margin-top: 22px;
      font-size: 22px;
    }

    &__actions {
      align-items: stretch;
      flex-direction: column;
    }

    &__counter {
      width: 100%;
      justify-content: space-between;
      border-radius: 28px;
    }

    &__cart-button {
      width: 100%;
      margin: 10px 0 0;
    }

    &__specs {
      grid-column: 1 / -1;
      padding-top: 0;
    }

    &__specs-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 4px 24px;
    }
  }
}

@include mobile {
  .product-page {
    width: calc(100% - 24px);
    padding: 24px 0 40px;

    &__layout {
      grid-template-columns: 1fr;
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
    }

    &__title,
    &__price,
    &__colors,
    &__actions {
      grid-column: 1;
    }

    &__title {
      margin: 4px 0 0;
    }

    &__price {
      margin-bottom: 4px;
    }

    &__thumbnails {
      gap: 8px;
    }

    &__arrow {
      width: 34px;
      height: 34px;

      &--previous {
        left: -8px;
      }

      &--next {
        right: -8px;
      }
    }

    &__specs-list {
      grid-template-columns: 1fr;
    }
  }
}
</style>
