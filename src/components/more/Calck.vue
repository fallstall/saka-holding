<script setup lang="ts">
import { computed, reactive } from 'vue'

import greenFabric from '@/assets/images/greenfabric.png'
import orangeFabric from '@/assets/images/orangefabric.png'
import whiteFabric from '@/assets/images/whitefabric.png'
import Title from '@/components/ui/Title.vue';

const fabrics = [
    { id: 'kulir', name: 'Кулирная гладь', kg: 10, meter: 11, image: greenFabric },
    { id: 'futer', name: 'Футер 3-х нитка', kg: 14, meter: 16, image: orangeFabric },
    { id: 'ribana', name: 'Рибана', kg: 12, meter: 13, image: whiteFabric },
]

const items = reactive([
    { fabric: '', rolls: 0, meters: 0 },
    { fabric: 'kulir', rolls: 0, meters: 10 },
])

const fabricById = (id: string) => fabrics.find((fabric) => fabric.id === id)
const change = (value: number, step: number) => Math.max(0, value + step)
const addItem = () => items.push({ fabric: '', rolls: 0, meters: 0 })
const totalRolls = computed(() => items.reduce((sum, item) => sum + item.rolls, 0))
const totalMeters = computed(() => items.reduce((sum, item) => sum + item.meters, 0))
const totalPrice = computed(() => items.reduce((sum, item) => {
    const fabric = fabricById(item.fabric)
    return sum + (fabric ? item.rolls * fabric.kg + item.meters * fabric.meter : 0)
}, 0))
</script>

<template>
    <Title
        text="Рассчитайте стоимость ткани, ответив на три вопроса"
        theme="center"
        class="calculator__text-center" />
    <section class="calculator">
        <div class="calculator__items">
            <article
                v-for="(item, index) in items"
                :key="index"
                class="calculator__item"
            >
                <div class="calculator__form">
                    <label class="calculator__label">
                        <span>{{ index + 1 }}. Выберите необходимую ткань</span>
                        <select v-model="item.fabric" class="calculator__select">
                            <option value="">Выберите ткань</option>
                            <option
                                v-for="fabric in fabrics"
                                :key="fabric.id"
                                :value="fabric.id"
                            >
                                {{ fabric.name }}
                            </option>
                        </select>
                    </label>

                    <label class="calculator__label">
                        <span>2. Введите общее количество рулонов</span>
                        <span class="calculator__stepper">
                            <button type="button" @click="item.rolls = change(item.rolls, -1)">−</button>
                            <input v-model.number="item.rolls" min="0" type="number" placeholder="Кол-во рулонов..">
                            <button type="button" @click="item.rolls = change(item.rolls, 1)">+</button>
                        </span>
                    </label>

                    <label class="calculator__label">
                        <span>2. Введите общее количество</span>
                        <span class="calculator__stepper">
                            <button type="button" @click="item.meters = change(item.meters, -1)">−</button>
                            <input v-model.number="item.meters" min="0" type="number">
                            <button type="button" @click="item.meters = change(item.meters, 1)">+</button>
                        </span>
                    </label>
                </div>

                <dl class="calculator__prices">
                    <div>
                        <dt>Цена за КГ:</dt>
                        <dd>{{ fabricById(item.fabric)?.kg ?? 10 }} рублей</dd>
                    </div>
                    <div>
                        <dt>Цена за МЕТР:</dt>
                        <dd>{{ fabricById(item.fabric)?.meter ?? 11 }} рублей</dd>
                    </div>
                    <div>
                        <dt>Общая сумма:</dt>
                        <dd>
                            {{
                                item.fabric
                                    ? item.rolls * (fabricById(item.fabric)?.kg ?? 0)
                                        + item.meters * (fabricById(item.fabric)?.meter ?? 0)
                                    : 11
                            }} рублей
                        </dd>
                    </div>
                </dl>

                <div class="calculator__preview">
                    <img
                        v-if="fabricById(item.fabric)?.image"
                        :src="fabricById(item.fabric)?.image"
                        :alt="fabricById(item.fabric)?.name"
                    >
                    <div v-else class="calculator__empty">
                        <span>?</span>
                        <p>Выберите ткань...</p>
                    </div>
                </div>
            </article>
        </div>

        <button class="calculator__add" type="button" @click="addItem">
            Добавить товар
            <span>+</span>
        </button>

        <div class="calculator__summary">
            <dl>
                <div><dt>Общее количество рулонов:</dt><dd>{{ totalRolls }}</dd></div>
                <div><dt>Общее количество рулонов:</dt><dd>{{ totalMeters }}</dd></div>
            </dl>
            <div class="calculator__total">
                <span>Итоговая сумма за все позиции:</span>
                <strong>{{ totalPrice.toLocaleString('ru-RU') }} ₽</strong>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.calculator {
    width: min(1160px, calc(100vw - 48px));
    min-height: 1270px;
    margin: 0px auto 70px;
    padding: 38px 56px 60px;
    border-radius: 16px;
    background-color: var(--black-color);
    color: var(--text-light-color);

    &__items {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    &__item {
        min-height: 400px;
        padding: 30px 40px;
        display: grid;
        grid-template-columns: minmax(380px, 1fr) 140px 342px;
        gap: 36px;
        border-radius: 18px;
        background-color: var(--black-80-color);
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 28px;
    }

    &__label {
        display: flex;
        flex-direction: column;
        gap: 14px;
        color: var(--text-light-color);
        font-size: 18px;
        font-weight: 600;
    }

    &__select,
    &__stepper input,
    &__stepper button {
        border: 0;
        outline: 0;
        background-color: var(--calculator-control-color);
        color: var(--text-light-color);
        font: inherit;
    }

    &__select {
        width: 100%;
        height: 62px;
        padding: 0 20px;
        border-radius: 16px;
        color: var(--on-dark-70-color);
        font-size: 16px;
    }

    &__stepper {
        display: grid;
        grid-template-columns: 62px minmax(180px, 1fr) 62px;
        gap: 10px;
    }

    &__stepper button,
    &__stepper input {
        height: 62px;
        border-radius: 16px;
    }

    &__stepper button {
        font-size: 36px;
        font-weight: 300;
        cursor: pointer;
        transition: background-color 0.2s ease;

        &:hover {
            background-color: var(--calculator-control-hover-color);
        }
    }

    &__stepper input {
        min-width: 0;
        padding: 0 28px;
        font-size: 16px;

        &::-webkit-inner-spin-button {
            appearance: none;
        }

        &::placeholder {
            color: var(--on-dark-35-color);
        }
    }

    &__prices {
        margin: 40px 0 0;
        display: flex;
        flex-direction: column;
        gap: 28px;

        div {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        dt {
            color: var(--on-dark-70-color);
            font-size: 14px;
        }

        dd {
            margin: 0;
            color: var(--text-light-color);
            font-size: 22px;
            font-weight: 700;
        }
    }

    &__preview {
        width: 342px;
        height: 342px;
        overflow: hidden;
        border-radius: 16px;
        background-color: var(--black-color);

        img {
            width: 100%;
            height: 100%;
            display: block;
            object-fit: cover;
        }
    }

    &__empty {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: var(--on-dark-35-color);

        span {
            width: 38px;
            height: 38px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--muted-color);
            color: var(--black-color);
            font-size: 24px;
            font-weight: 700;
        }

        p {
            margin: 20px 0 0;
            font-size: 16px;
        }
    }

    &__add {
        width: 310px;
        height: 56px;
        margin: 30px auto 40px;
        padding: 0 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 0;
        border-radius: 32px;
        background-color: var(--gold-color);
        color: var(--text-dark-color);
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;

        span {
            font-size: 38px;
            font-weight: 300;
        }
    }

    &__summary {
        width: 612px;
        min-height: 164px;
        margin: 0 auto;
        padding: 30px 40px;
        display: grid;
        grid-template-columns: 190px 1fr;
        gap: 40px;
        border-radius: 16px;
        background-color: var(--black-80-color);

        dl {
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 26px;

            div {
                display: grid;
                grid-template-columns: 130px 1fr;
                align-items: center;
                gap: 16px;
            }

            dt {
                color: var(--on-dark-70-color);
                font-size: 12px;
            }

            dd {
                margin: 0;
                font-size: 26px;
                font-weight: 700;
            }
        }
    }

    &__total {
        span {
            display: block;
            color: var(--on-dark-70-color);
            font-size: 12px;
        }

        strong {
            margin-top: 16px;
            display: block;
            font-size: 62px;
            font-weight: 300;
            line-height: 1;
            white-space: nowrap;
        }
    }
}

@include mobile {
    .calculator {
        padding: 16px;

        &__item {
            grid-template-columns: 1fr;
        }

        &__preview {
            width: 100%;
            height: auto;
            aspect-ratio: 1 / 1;
        }

        &__summary {
            width: 100%;
            grid-template-columns: 1fr;
        }
    }
}
</style>
