<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import Title from '@/components/ui/Title.vue';

import Button from '@/components/ui/Button.vue'
import arrowIcon from '@/assets/images/ArrowRight.png'
import blueFabric from '@/assets/images/bluefabric.png'
import whiteFabric from '@/assets/images/whitefabric.png'
import orangeFabric from '@/assets/images/orangefabric.png'
import greenFabric from '@/assets/images/greenfabric.png'

const props = withDefaults(defineProps<{
    cardsOnly?: boolean
    catalogGrid?: boolean
}>(), {
    cardsOnly: false,
    catalogGrid: false,
})

const fabrics = [
    { image: blueFabric, title: 'Кулинарная гладь', price: '11,4$', width: '180 см' },
    { image: whiteFabric, title: 'Кулинарная гладь', price: '13$', width: '180 см' },
    { image: orangeFabric, title: 'Кулинарная гладь', price: '122,4$', width: '180 см' },
    { image: greenFabric, title: 'Кулинарная гладь', price: '13,84$', width: '180 см' },
]

const activeIndex = ref(0)
const router = useRouter()

const visibleFabrics = computed(() =>
    fabrics.map((_, index) => fabrics[(activeIndex.value + index) % fabrics.length]!)
)

const displayedFabrics = computed(() =>
    props.catalogGrid
        ? [whiteFabric, orangeFabric, greenFabric, blueFabric].map((image, index) => ({
            image,
            title: fabrics[index]?.title ?? '',
            price: ['13$', '122,4$', '13$', '122,4$'][index] ?? '',
            width: fabrics[index]?.width ?? '',
        }))
        : props.cardsOnly
            ? fabrics.slice(1)
            : visibleFabrics.value
)

function showPrev() {
    activeIndex.value = (activeIndex.value - 1 + fabrics.length) % fabrics.length
}

function showNext() {
    activeIndex.value = (activeIndex.value + 1) % fabrics.length
}

function openFabric() {
    router.push('/more')
}
</script>

<template>
    <section
        class="fabric-slider"
        :class="{
            'fabric-slider--cards-only': cardsOnly,
            'fabric-slider--catalog-grid': catalogGrid,
        }"
    >
        
        <div class="fabric-slider__inner">
            <Title
                v-if="!cardsOnly"
                text="Недавно просмотренные"
                theme="left"
                class="fabric-slider__text-left"
            />
            <button
                v-if="!cardsOnly"
                class="fabric-slider__arrow fabric-slider__arrow--prev"
                type="button"
                aria-label="Предыдущая ткань"
                @click="showPrev"
            >
                <span aria-hidden="true"></span>
            </button>

            <div class="fabric-slider__viewport" aria-live="polite">
                <article
                    v-for="fabric in displayedFabrics"
                    :key="fabric.image"
                    class="fabric-slider__card"
                >
                    <img
                        class="fabric-slider__image"
                        :src="fabric.image"
                        :alt="fabric.title"
                    >
                    <div class="fabric-slider__body">
                        <h3 class="fabric-slider__title">{{ fabric.title }}</h3>
                        <div class="fabric-slider__meta">
                            <span class="fabric-slider__price">{{ fabric.price }}</span>
                            <span class="fabric-slider__width">{{ fabric.width }}</span>
                        </div>
                        <Button
                            class="fabric-slider__button"
                            theme="full"
                            text="Подробнее"
                            :icon="arrowIcon"
                            @click="openFabric"
                        />
                    </div>
                </article>
            </div>

            <button
                v-if="!cardsOnly"
                class="fabric-slider__arrow fabric-slider__arrow--next"
                type="button"
                aria-label="Следующая ткань"
                @click="showNext"
            >
                <span aria-hidden="true"></span>
            </button>
        </div>
    </section>
</template>

<style scoped lang="scss">
.fabric-slider {
    background-color: var(--surface-color);
    padding: 52px 0 70px;

    &__inner {
        position: relative;
        width: min(1160px, calc(100vw - 48px));
        margin: 0 auto;
    }

    &__viewport {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 30px;
    }

    &__card {
        min-width: 0;
        overflow: hidden;
        border-radius: 8px;
        background-color: var(--bg-color);
    }

    &__image {
        width: 100%;
        aspect-ratio: 1 / 1;
        display: block;
        object-fit: cover;
        border-radius: 8px;
    }

    &__body {
        padding: 20px 23px 16px;
    }

    &__title {
        margin: 0 0 8px;
        color: var(--text-dark-color);
        font-size: 15px;
        font-weight: 700;
        line-height: 1.25;
    }

    &__meta {
        display: flex;
        align-items: baseline;
        gap: 14px;
        margin-bottom: 14px;
    }

    &__price {
        color: var(--price-color);
        font-size: 17px;
        font-weight: 700;
        line-height: 1;
    }

    &__width {
        color: var(--muted-color);
        font-size: 10px;
        font-weight: 400;
        line-height: 1;
        text-transform: uppercase;
    }

    &__button {
        width: 150px;
        height: 40px;
        padding: 0 19px;
        border-radius: 20px;
        gap: 24px;

        :deep(.btn__text) {
            font-size: 12px;
            font-weight: 700;
        }

        :deep(.btn__icon) {
            width: 15px;
            height: 15px;
        }
    }

    &__arrow {
        position: absolute;
        top: 50%;
        z-index: 2;
        width: 38px;
        height: 38px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background-color: var(--bg-color);
        cursor: pointer;
        transform: translateY(-50%);
        transition:
            background-color 0.2s ease,
            transform 0.2s ease;

        &:hover {
            background-color: var(--control-hover-color);
            transform: translateY(-50%) scale(1.04);
        }

        &:focus-visible {
            outline: 2px solid var(--gold-color);
            outline-offset: 4px;
        }

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            border-top: 2px solid var(--black-color);
            border-left: 2px solid var(--black-color);
        }

        &--prev {
            left: -54px;

            span {
                transform: translate(-35%, -50%) rotate(-45deg);
            }
        }

        &--next {
            right: -54px;

            span {
                transform: translate(-65%, -50%) rotate(135deg);
            }
        }
    }

    &--cards-only {
        padding: 0;
        background-color: var(--transparent-color);

        .fabric-slider__inner {
            width: 100%;
        }

        .fabric-slider__viewport {
            grid-template-columns: repeat(3, 267.5px);
            gap: 30px;
        }

        .fabric-slider__card {
            width: 267.5px;
        }
    }

    &--catalog-grid {
        .fabric-slider__viewport {
            grid-template-columns: repeat(3, minmax(0, 267.5px));
        }

        .fabric-slider__card {
            width: 100%;
        }
    }
}

@include tablet {
    .fabric-slider {
        overflow: hidden;
        padding: 38px 0 52px;

        &__inner {
            width: calc(100% - 72px);
        }

        &__viewport {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
        }

        &__body {
            padding: 14px;
        }

        &__card:nth-child(n + 3) {
            display: none;
        }

        &__button {
            width: 100%;
        }

        &__arrow--prev {
            left: -12px;
        }

        &__arrow--next {
            right: -12px;
        }

        &--cards-only {
            .fabric-slider__inner {
                width: 100%;
            }

            .fabric-slider__viewport {
                grid-template-columns: repeat(2, minmax(0, 267.5px));
                justify-content: center;
                gap: 12px;
            }

            .fabric-slider__card {
                width: 100%;
                max-width: 267.5px;
            }

            .fabric-slider__card:nth-child(n + 3) {
                display: none;
            }
        }

        &--catalog-grid {
            .fabric-slider__viewport {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .fabric-slider__card:nth-child(n) {
                display: block;
            }
        }
    }
}

@include mobile {
    .fabric-slider {
        padding: 30px 0 42px;

        &__inner {
            width: calc(100% - 32px);
        }

        &__viewport {
            grid-template-columns: 1fr;
        }

        &__card:nth-child(n + 2) {
            display: none;
        }

        &__body {
            padding: 16px;
        }

        &__arrow--prev {
            left: 4px;
        }

        &__arrow--next {
            right: 4px;
        }

        &--cards-only {
            .fabric-slider__inner {
                width: 100%;
            }

            .fabric-slider__viewport {
                grid-template-columns: minmax(0, 1fr);
                gap: 10px;
            }

            .fabric-slider__card:nth-child(2) {
                display: block;
            }

            .fabric-slider__card {
                max-width: none;
            }
        }

        &--catalog-grid {
            .fabric-slider__viewport {
                grid-template-columns: 1fr;
            }

            .fabric-slider__card:nth-child(n) {
                display: block;
            }
        }
    }
}
</style>
