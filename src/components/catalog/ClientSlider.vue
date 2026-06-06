<!-- девочки извините я тупая и случайно компонент из страничке about написала
в папке для странички каталог, мне лень пути переделывать я устала -->
<script setup lang="ts">
import { computed, ref } from 'vue'

import Button from '@/components/ui/Button.vue'
import Title from '@/components/ui/Title.vue'
import arrowIcon from '@/assets/images/ArrowRight.png'

const reviews = [
    {
        author: 'Наталья',
        text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.',
    },
    {
        author: 'Василий',
        text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений. Являясь всего лишь частью общей картины, акционеры крупнейших компаний, превозмогая сложившуюся непростую экономическую ситуацию.',
    },
    {
        author: 'Геннадий',
        text: 'Повседневная практика показывает, что современная методология разработки способствует повышению качества благоприятных перспектив. Наше дело не так однозначно, как может показаться: высокое качество позиционных исследований не даёт нам иного выбора, кроме определения глубокомысленных рассуждений.',
    },

]

const activeIndex = ref(0)

const visibleReviews = computed(() =>
    reviews.map((_, index) => reviews[(activeIndex.value + index) % reviews.length]!)
)

function showPrev() {
    activeIndex.value = (activeIndex.value - 1 + reviews.length) % reviews.length
}

function showNext() {
    activeIndex.value = (activeIndex.value + 1) % reviews.length
}
</script>

<template>
    <section class="client-slider">
        <div class="client-slider__inner">
            <div class="client-slider__header">
                <Title
                    class="client-slider__title"
                    theme="left"
                    text="Делаем все для того, чтобы вы остались довольны нашей тканью"
                />

                <div class="client-slider__controls">
                    <Button
                        class="client-slider__arrow client-slider__arrow--prev"
                        theme="icon"
                        :icon="arrowIcon"
                        aria-label="Предыдущий отзыв"
                        @click="showPrev"
                    />
                    <Button
                        class="client-slider__arrow client-slider__arrow--next"
                        theme="icon"
                        :icon="arrowIcon"
                        aria-label="Следующий отзыв"
                        @click="showNext"
                    />
                </div>
            </div>

            <div class="client-slider__viewport" aria-live="polite">
                <article
                    v-for="review in visibleReviews"
                    :key="review.author"
                    class="client-slider__card"
                >
                    <p class="client-slider__text">{{ review.text }}</p>
                    <h3 class="client-slider__author">{{ review.author }}</h3>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.client-slider {
    padding: 54px 0 92px;
    background-color: var(--bg-color);

    &__inner {
        width: min(1160px, calc(100vw - 48px));
        margin: 0 auto;
    }

    &__header {
        margin-bottom: 28px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 32px;
    }

    &__title {
        width: min(560px, 100%);
        margin: 0;
        color: var(--text-dark-color);
        font-size: 26px;
        line-height: 1.18;
    }

    &__controls {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__arrow {
        width: 54px;
        height: 54px;
        border-radius: 14px;

        :deep(.btn__icon) {
            width: 20px;
            height: 20px;
        }

        &--prev {
            background-color: var(--control-color);

            :deep(.btn__icon) {
                transform: rotate(180deg);
            }
        }

        &--next {
            background-color: var(--gold-color);
        }
    }

    &__viewport {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 34px;
    }

    &__card {
        min-height: 334px;
        padding: 28px 27px 26px;
        display: flex;
        flex-direction: column;
        border-radius: 14px;
        background-color: var(--control-color);
    }

    &__text {
        margin: 0;
        color: var(--text-dark-color);
        font-size: 12px;
        font-weight: 400;
        line-height: 1.48;
    }

    &__author {
        margin: auto 0 0;
        padding-top: 18px;
        color: var(--text-dark-color);
        font-size: 15px;
        font-weight: 700;
        line-height: 1.2;
    }
}

@include tablet {
    .client-slider {
        padding: 46px 0 70px;

        &__inner {
            width: min(100% - 32px, 680px);
        }

        &__viewport {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
        }

        &__card:nth-child(n + 3) {
            display: none;
        }
    }
}

@include mobile {
    .client-slider {
        &__header {
            align-items: stretch;
            flex-direction: column;
        }

        &__controls {
            justify-content: flex-end;
        }

        &__viewport {
            grid-template-columns: 1fr;
        }

        &__card {
            min-height: 310px;
        }

        &__card:nth-child(n + 2) {
            display: none;
        }
    }
}
</style>
