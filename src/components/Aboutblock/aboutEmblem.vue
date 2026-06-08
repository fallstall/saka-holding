<script setup lang="ts">
defineProps<{
    theme?: 'big' | 'small'
    title?:string
    text?:string
}>()
</script>

<template>
    <div class="emblem">
        <img src="../../assets/images/crown.png" class="emblem__img">
        <span class="emblem__title" :class="`emblem__title--${theme}`">{{ title }}</span>
        <span class="emblem__text">{{ text }}</span>
    </div>
</template>

<style lang="scss">
    .emblem{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 180px;
        height: 180px;
        background-color: var(--gray);
        border-radius: 50%;
        margin-right: 20px;

        &__img{
            width: 24px;
            height: 24px;
        }

        &__title{
            color: var(--darkGold);
            font-weight: 600;
            &--big{
                font-size: 42px;
            }

            &--small{
                font-size: 32px;
            }
        }

        &__text{
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            width: 130px;
        }
    }
</style>