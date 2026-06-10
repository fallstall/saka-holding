<script setup lang="ts">
import { computed, ref } from 'vue'

import sertone from '@/assets/images/sertone.png'
import serttwo from '@/assets/images/serttwo.png'
import sertthree from '@/assets/images/sertthree.png'

const certificates = [
    { image: sertone, title: 'Certificate one' },
    { image: serttwo, title: 'Certificate two' },
    { image: sertthree, title: 'Certificate three' },
]

const activeIndex = ref(0)

const visibleCertificates = computed(() =>
    certificates.map((_, index) => certificates[(activeIndex.value + index) % certificates.length]!)
)

function showPrev() {
    activeIndex.value = (activeIndex.value - 1 + certificates.length) % certificates.length
}

function showNext() {
    activeIndex.value = (activeIndex.value + 1) % certificates.length
}
</script>

<template>
    <section class="sert-slider">
        <div class="sert-slider__inner">
            <button
                class="sert-slider__arrow sert-slider__arrow--prev"
                type="button"
                aria-label="Previous certificate"
                @click="showPrev"
            >
                <span aria-hidden="true"></span>
            </button>

            <div class="sert-slider__viewport" aria-live="polite">
                <article
                    v-for="certificate in visibleCertificates"
                    :key="certificate.image"
                    class="sert-slider__item"
                >
                    <img
                        class="sert-slider__image"
                        :src="certificate.image"
                        :alt="certificate.title"
                    >
                </article>
            </div>

            <button
                class="sert-slider__arrow sert-slider__arrow--next"
                type="button"
                aria-label="Next certificate"
                @click="showNext"
            >
                <span aria-hidden="true"></span>
            </button>
        </div>
    </section>
</template>

<style scoped lang="scss">
.sert-slider {
    background-color: var(--bg-color);
    padding: 5px 0 76px;

    &__inner {
        position: relative;
        width: min(100%, 1300px);
        margin: 0 auto;
        padding: 0 80px;
    }

    &__viewport {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        align-items: center;
        gap: 40px;
    }

    &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 0;
        height: 504px;
    }

    &__image {
        width: 100%;
        height: 100%;
        object-fit: contain;
        display: block;
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
        background-color: var(--control-color);
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
            left: 0;

            span {
                transform: translate(-35%, -50%) rotate(-45deg);
            }
        }

        &--next {
            right: 0;

            span {
                transform: translate(-65%, -50%) rotate(135deg);
            }
        }
    }
}

@include tablet {
    .sert-slider {
        padding: 24px 0 44px;

        &__inner {
            padding: 0 48px;
        }

        &__viewport {
            grid-template-columns: 1fr;
        }

        &__item {
            height: 330px;
        }

        &__item:nth-child(n + 2) {
            display: none;
        }
    }
}

@include mobile {
    .sert-slider {
        padding-bottom: 36px;

        &__inner {
            padding: 0 40px;
        }

        &__item {
            height: 260px;
        }

        &__arrow {
            width: 36px;
            height: 36px;
        }
    }
}
</style>
