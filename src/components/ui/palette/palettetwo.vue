<script setup lang="ts">
import Palletecolor from './Palletecolor.vue';

import darkgrey from '../../../assets/images/t-shirts/dark-grey.png'
import grey from '../../../assets/images/t-shirts/grey.png'
import white from '../../../assets/images/t-shirts/white.png'
import black from '../../../assets/images/t-shirts/black.png'
import darkblue from '../../../assets/images/t-shirts/dark-blue.png'
import blue from '../../../assets/images/t-shirts/blue.png'
import lightblue from '../../../assets/images/t-shirts/light-blue.png'
import orange from '../../../assets/images/t-shirts/orange.png'
import green from '../../../assets/images/t-shirts/green.png'
import yellow from '../../../assets/images/t-shirts/yellow.png'
import purple from '../../../assets/images/t-shirts/purple.png'
import red from '../../../assets/images/t-shirts/red.png'
</script>

<template>
    <div class="color-palette">
        <p class="color-palette__title">Цвет</p>
        <div class="color-palette__grid">
            <div class="color-palette__row">
                <Palletecolor :img1="darkgrey" :img2="grey" :img3="white" />
                <Palletecolor :img1="black" :img2="darkblue" :img3="blue" />
            </div>
            <div class="color-palette__row">
                <Palletecolor :img1="lightblue" :img2="orange" :img3="green" />
                <Palletecolor :img1="yellow" :img2="purple" :img3="red" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.color-palette {
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 200px;          /* Ширина как в шаблоне */
    height: 150px;
    margin: 0;
    padding: 0;

    &__title {
        font-size: 14px;
        font-weight: 600;
        color: #1a1f29;
        margin: 0;
        margin-bottom: 4px;
    }

    &__grid {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__row {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
    }

    &__row .palette__item img {
        width: 27px;
        height: 22px;
        object-fit: contain;
    }
}
</style>