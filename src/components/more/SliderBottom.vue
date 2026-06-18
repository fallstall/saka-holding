<script setup lang="ts">
import { computed, ref } from 'vue'

import blueFabric from '@/assets/images/bluefabric.png'
import greenFabric from '@/assets/images/greenfabric.png'
import orangeFabric from '@/assets/images/orangefabric.png'
import whiteFabric from '@/assets/images/whitefabric.png'

const props = withDefaults(defineProps<{
    embedded?: boolean
    staticView?: boolean
}>(), {
    embedded: false,
    staticView: false,
})

const fabrics = [
    { image: whiteFabric, alt: 'Белая ткань' },
    { image: greenFabric, alt: 'Зелёная ткань' },
    { image: blueFabric, alt: 'Голубая ткань' },
    { image: orangeFabric, alt: 'Оранжевая ткань' },
]

const activeIndex = ref(0)

const visibleFabrics = computed(() =>
    props.staticView
        ? fabrics
        : fabrics.map((_, index) => fabrics[(activeIndex.value + index) % fabrics.length]!)
)

function showPrevious() {
    activeIndex.value = (activeIndex.value - 1 + fabrics.length) % fabrics.length
}

function showNext() {
    activeIndex.value = (activeIndex.value + 1) % fabrics.length
}
</script>

<template>
    <section
        class="slider-bottom"
        :class="{ 'slider-bottom--embedded': embedded }"
        aria-label="Другие ткани"
    >
        <div class="slider-bottom__carousel">
            <button
                v-if="!staticView"
                class="slider-bottom__arrow slider-bottom__arrow--previous"
                type="button"
                aria-label="Предыдущие ткани"
                @click="showPrevious"
            >
                <span aria-hidden="true"></span>
            </button>
            <span
                v-else
                class="slider-bottom__arrow slider-bottom__arrow--previous"
                aria-hidden="true"
            >
                <span></span>
            </span>

            <div class="slider-bottom__track" aria-live="polite">
                <img
                    v-for="fabric in visibleFabrics"
                    :key="fabric.image"
                    class="slider-bottom__image"
                    :src="fabric.image"
                    :alt="fabric.alt"
                >
            </div>

            <button
                v-if="!staticView"
                class="slider-bottom__arrow slider-bottom__arrow--next"
                type="button"
                aria-label="Следующие ткани"
                @click="showNext"
            >
                <span aria-hidden="true"></span>
            </button>
            <span
                v-else
                class="slider-bottom__arrow slider-bottom__arrow--next"
                aria-hidden="true"
            >
                <span></span>
            </span>
        </div>
    </section>
</template>

<style scoped lang="scss">
.slider-bottom {
    width: min(1160px, calc(100% - 48px));
    margin:20px;

    &__carousel {
        position: relative;
        width: 510px;
        height: 100px;
    }

    &__track {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(4, 127px);
        justify-content: space-between;
        overflow: hidden;
    }

    &__image {
        width: 100px;
        height: 100px;
        display: block;
        object-fit: cover;
        border-radius: 16px;
    }

    &__arrow {
        position: absolute;
        top: 50%;
        z-index: 2;
        width: 42px;
        height: 42px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background-color: var(--bg-color);
        transform: translateY(-50%);

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 11px;
            height: 11px;
            border-top: 2px solid var(--black-color);
            border-left: 2px solid var(--black-color);
        }

        &--previous {
            left: -20px;

            span {
                transform: translate(-35%, -50%) rotate(-45deg);
            }
        }

        &--next {
            right: -5px;

            span {
                transform: translate(-65%, -50%) rotate(135deg);
            }
        }
    }

    button.slider-bottom__arrow {
        cursor: pointer;
        transition:
            background-color 0.2s ease,
            transform 0.2s ease;

        &:hover {
            background-color: var(--control-hover-color);
            transform: translateY(-50%) scale(1.04);
        }

        &:focus-visible {
            outline: 2px solid var(--gold-color);
            outline-offset: 3px;
        }
    }

    &--embedded {
        width: 100%;
        margin: 16px 0 0;

        .slider-bottom__carousel {
            width: 100%;
            height: auto;
        }

        .slider-bottom__track {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 14px;
        }

        .slider-bottom__image {
            width: 100%;
            height: auto;
            aspect-ratio: 1 / 1;
            border-radius: 12px;
        }
    }
}

@include tablet {
    .slider-bottom {
        &__carousel {
            width: min(510px, 100%);
        }

        &__track {
            grid-template-columns: repeat(4, minmax(0, 100px));
            gap: 12px;
        }

        &__image {
            width: 100%;
        }

        &__arrow--previous {
            left: -16px;
        }

        &__arrow--next {
            right: -16px;
        }

        &--embedded {
            .slider-bottom__track {
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 8px;
            }
        }
    }
}

@include mobile {
    .slider-bottom {
        width: calc(100% - 64px);

        &__track {
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        &__image {
            height: auto;
            aspect-ratio: 1 / 1;

            &:nth-child(4) {
                display: none;
            }
        }

        &--embedded {
            width: 100%;

            .slider-bottom__track {
                grid-template-columns: repeat(4, minmax(0, 1fr));
            }

            .slider-bottom__image:nth-child(4) {
                display: block;
            }
        }
    }
}
</style>
