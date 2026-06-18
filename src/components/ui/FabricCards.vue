<script setup lang="ts">
import { RouterLink } from 'vue-router'

import arrowIcon from '@/assets/images/ArrowRight.png'

import blueFabric from '@/assets/images/bluefabric.png'
import whiteFabric from '@/assets/images/whitefabric.png'
import orangeFabric from '@/assets/images/orangefabric.png'
import greenFabric from '@/assets/images/greenfabric.png'

const fabrics = [
  {
    image: whiteFabric,
    title: 'Кулинарная гладь',
    price: '13$',
    width: '180 см',
  },
  {
    image: orangeFabric,
    title: 'Кулинарная гладь',
    price: '122,4$',
    width: '180 см',
  },
  {
    image: greenFabric,
    title: 'Кулинарная гладь',
    price: '13,84$',
    width: '180 см',
  },
  {
    image: blueFabric,
    title: 'Кулинарная гладь',
    price: '11,4$',
    width: '180 см',
  },
  {
    image: whiteFabric,
    title: 'Кулинарная гладь',
    price: '13$',
    width: '180 см',
  },
  {
    image: orangeFabric,
    title: 'Кулинарная гладь',
    price: '122,4$',
    width: '180 см',
  },
]
</script>

<template>
  <div class="fabric-cards">
    <article
      v-for="fabric in fabrics"
      :key="fabric.image + fabric.price"
      class="fabric-card"
    >
      <img
        class="fabric-card__image"
        :src="fabric.image"
        :alt="fabric.title"
      >

      <div class="fabric-card__body">
        <h3 class="fabric-card__title">
          {{ fabric.title }}
        </h3>

        <div class="fabric-card__info">
          <span class="fabric-card__price">
            {{ fabric.price }}
          </span>

          <span class="fabric-card__width">
            {{ fabric.width }}
          </span>
        </div>

        <RouterLink class="fabric-card__button" to="/more">
          <span>Подробнее</span>

          <img
            class="fabric-card__button-icon"
            :src="arrowIcon"
            alt=""
          >
        </RouterLink>
      </div>
    </article>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss' as *;

.fabric-cards {
  width: 862.5px;

  display: grid;
  grid-template-columns: repeat(3, 267.5px);
  gap: 30px;
}

.fabric-card {
  width: 267.5px;
  overflow: hidden;
  border-radius: 8px;
  background-color: var(--bg-color);
}

.fabric-card__image {
  width: 100%;
  height: 267.5px;
  display: block;
  border-radius: 8px;
  object-fit: cover;
}

.fabric-card__body {
  padding: 20px 22px 14px;
}

.fabric-card__title {
  margin: 0 0 8px;
  color: var(--text-dark-color);
  font-size: 15px;
  font-weight: 700;
  line-height: 1.25;
}

.fabric-card__info {
  margin-bottom: 14px;
  display: flex;
  align-items: baseline;
  gap: 14px;
}

.fabric-card__price {
  color: var(--price-color);
  font-size: 17px;
  font-weight: 700;
  line-height: 1;
}

.fabric-card__width {
  color: var(--muted-color);
  font-size: 10px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
}

.fabric-card__button {
  width: 150px;
  height: 40px;
  padding: 0 19px;
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--gold-color);
  color: var(--black-color);
  text-decoration: none;

  font-size: 12px;
  font-weight: 700;
}

.fabric-card__button-icon {
  width: 15px;
  height: 15px;
  object-fit: contain;
}

@include tablet {
  .fabric-cards {
    width: 100%;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px 16px;
  }

  .fabric-card {
    width: 100%;
  }

  .fabric-card__image {
    height: auto;
    aspect-ratio: 1 / 1;
  }

  .fabric-card__button {
    width: 100%;
  }
}

@include mobile {
  .fabric-cards {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}
</style>