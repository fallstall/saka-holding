<script setup lang="ts">

defineProps<{
    text?: string
    theme?: 'full' | 'icon' | 'text'
    transform?: string
    icon?: string
}>()

</script>

<!-- <template>
    <button class="'btn-${{theme}}'">
        <span v-if="theme !== 'icon'" >{{ text }}</span>
        <img v-if="theme === 'icon' || theme === 'full'"
        :src="icon"
        alt="">
    </button>
</template> -->

<template>
    <button class="btn" :class="`btn--${theme}`">
    <span v-if="theme !== 'icon'" class="btn__text">
        {{ text }}
    </span>

    <img
        v-if="theme === 'icon' || theme === 'full'"
        class="btn__icon"
        :src="icon"
        alt=""
    >
    </button>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .btn {
        border: none;
        cursor: pointer;
        font-family: inherit;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        background-color: var(--gold-color);
        color: var(--black-color);

        &__text {
            font-size: 24px;
            font-weight: 700;
            line-height: 1;
        }

        &__icon {
            width: 32px;
            height: 32px;
            object-fit: contain;
        }

    // только иконка, круглая кнопка
        &--icon {
            width: 84px;
            height: 84px;
            padding: 0;
            border-radius: 50%;
        }

    // текст + иконка
        &--full {
            width: 260px;
            height: 60px;
            padding: 0 52px;
            border-radius: 100px;

            justify-content: space-between;
            gap: 74px;
        }

    // только текст по центру
        &--text {
            width: 260px;
            height: 60px;
            padding: 0 52px;
            border-radius: 100px;

            justify-content: center;
            text-align: center;
        }
    }
</style>