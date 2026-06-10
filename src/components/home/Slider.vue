<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

import arrowIcon from '@/assets/images/ArrowRight.png'
import back1 from '@/assets/images/back1.png'
import back2 from '@/assets/images/back2.png'
import back3 from '@/assets/images/back3.png'
import back4 from '@/assets/images/back4.png'
import back5 from '@/assets/images/back5.png'
import womanImage from '@/assets/images/women.png'

const slides = [
    { image: back1, accent: 'специальными', lastLine: 'предложениями' },
    { image: back2, accent: 'выгодными', lastLine: 'ценами' },
    { image: back3, accent: 'новыми', lastLine: 'коллекциями' },
    { image: back4, accent: 'сезонными', lastLine: 'скидками' },
    { image: back5, accent: 'лучшими', lastLine: 'тканями' },
]

const activeSlide = ref(0)
let sliderTimer: number | undefined

const currentSlide = computed(() => slides[activeSlide.value]!)
const slideNumber = computed(() => String(activeSlide.value + 1).padStart(2, '0'))
const totalSlides = computed(() => String(slides.length).padStart(2, '0'))

function selectSlide(index: number) {
    activeSlide.value = index
}

function nextSlide() {
    activeSlide.value = (activeSlide.value + 1) % slides.length
}

function startSlider() {
    stopSlider()
    sliderTimer = window.setInterval(nextSlide, 4500)
}

function stopSlider() {
    if (sliderTimer) {
        window.clearInterval(sliderTimer)
        sliderTimer = undefined
    }
}

onMounted(startSlider)
onBeforeUnmount(stopSlider)
</script>

<template>
    <section class="slider" aria-label="Акции и специальные предложения">
        <div
            class="slider__card"
            @mouseenter="stopSlider"
            @mouseleave="startSlider"
        >
            <div class="slider__slides" aria-hidden="true">
                <div
                    v-for="(slide, index) in slides"
                    :key="slide.image"
                    class="slider__slide"
                    :class="{ 'slider__slide--active': index === activeSlide }"
                    :style="{ backgroundImage: `url(${slide.image})` }"
                ></div>
            </div>

            <div class="slider__content">
                <h1 class="slider__title">
                    Здесь будет слайдер<br>
                    с различными акциями<br>
                    или <span>{{ currentSlide.accent }}</span><br>
                    <span>{{ currentSlide.lastLine }}</span>
                </h1>

                <a class="slider__button" href="#">
                    <span>Подробнее</span>
                    <img :src="arrowIcon" alt="">
                </a>
            </div>

            <img class="slider__woman" :src="womanImage" alt="">

            <div class="slider__bottom">
                <div class="slider__dots" aria-label="Выбор слайда">
                    <button
                        v-for="(_, index) in slides"
                        :key="index"
                        class="slider__dot"
                        :class="{ 'slider__dot--active': index === activeSlide }"
                        type="button"
                        :aria-label="`Слайд ${index + 1}`"
                        @click="selectSlide(index)"
                    ></button>
                </div>

                <div class="slider__counter">
                    <span>{{ slideNumber }}</span>
                    <span>/</span>
                    <span>{{ totalSlides }}</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.slider {
    padding: 96px 0 0px;
    background-color: var(--bg-color);

    &__card {
        position: relative;
        width: min(1160px, calc(100vw - 48px));
        height: 438px;
        margin: 0 auto;
        overflow: visible;
        border-radius: 13px;
        background-color: var(--black-color);
    }

    &__slides,
    &__slide {
        position: absolute;
        inset: 0;
    }

    &__slide {
        overflow: hidden;
        border-radius: 13px;
        opacity: 0;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        transition: opacity 0.6s ease;

        &--active {
            opacity: 1;
        }
    }

    &__content {
        position: relative;
        z-index: 2;
        width: 470px;
        padding: 68px 0 0 95px;
        text-align: left;
    }

    &__title {
        margin: 0;
        color: var(--text-light-color);
        font-size: 30px;
        font-weight: 700;
        line-height: 1.35;
        letter-spacing: 1.1px;

        span {
            color: var(--gold-color);
        }
    }

    &__button {
        width: 248px;
        height: 58px;
        margin-top: 31px;
        padding: 0 30px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        border: 0;
        border-radius: 100px;
        background-color: var(--gold-color);
        color: var(--text-dark-color);
        cursor: pointer;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 0.5px;
        text-decoration: none;

        img {
            width: 19px;
            height: 19px;
            object-fit: contain;
        }
    }

    &__woman {
        position: absolute;
        z-index: 1;
        right: 58px;
        bottom: -9px;
        width: 520px;
        height: auto;
        pointer-events: none;
        user-select: none;
    }

    &__bottom {
        position: absolute;
        z-index: 3;
        left: 95px;
        bottom: 37px;
        display: flex;
        align-items: center;
        gap: 44px;
    }

    &__dots {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    &__dot {
        width: 29px;
        height: 3px;
        padding: 0;
        border: 0;
        background-color: var(--on-dark-16-color);
        cursor: pointer;

        &--active {
            background-color: var(--gold-color);
        }
    }

    &__counter {
        display: flex;
        align-items: center;
        gap: 14px;
        color: var(--on-dark-35-color);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 1px;

        span:first-child {
            color: var(--text-light-color);
        }
    }
}

@include tablet {
    .slider {
        padding-top: 24px;

        &__card {
            width: calc(100% - 32px);
            height: 300px;
            overflow: hidden;
        }

        &__content {
            width: 58%;
            padding: 34px 0 0 28px;
        }

        &__title {
            font-size: 18px;
            line-height: 1.32;
        }

        &__button {
            width: 170px;
            height: 42px;
            margin-top: 20px;
            padding: 0 20px;
            font-size: 12px;
        }

        &__woman {
            right: -18px;
            bottom: -5px;
            width: 285px;
        }

        &__bottom {
            left: 28px;
            bottom: 22px;
            gap: 20px;
        }

        &__dots {
            gap: 10px;
        }

        &__dot {
            width: 18px;
        }

        &__counter {
            gap: 7px;
            font-size: 12px;
        }
    }
}

@include mobile {
    .slider {
        padding-top: 16px;

        &__card {
            width: calc(100% - 24px);
            height: 290px;
        }

        &__content {
            width: 100%;
            padding: 24px 20px 0;
        }

        &__title {
            max-width: 205px;
            font-size: 15px;
        }

        &__button {
            width: 150px;
            height: 38px;
            margin-top: 14px;
            font-size: 11px;

            img {
                width: 15px;
                height: 15px;
            }
        }

        &__woman {
            right: 0;
            width: 190px;
        }

        &__bottom {
            left: 20px;
            bottom: 14px;
        }

        &__counter {
            display: none;
        }
    }
}
</style>
