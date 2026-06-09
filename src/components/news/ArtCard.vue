<script setup lang="ts">
import ArrowUpRight from '@/assets/images/news-card-img/ArrowUpRight.png';
import Button from '../ui/Button.vue';
    defineProps<{
        icon?:string
    }>()
</script>

<template>
    <div class="artcard">
        <img class="artcatd__img" :src="icon">
        <div class="artcard__main">
            <div class="artcard__text">
                <p class="artcard__title">
                Пример текста <br>
                для заголовка новости
                </p>
                <span class="artcard__date">31.03.2022</span>
            </div>
            <Button theme="icon" :icon="ArrowUpRight" class="artcard__button"/>
        </div>
    </div>
</template>

<style lang="scss">
    .artcard{
        display:flex;
        flex-direction: column;
        max-width: 360px;
        height: 500px;
        background-color: var(--gray);
        border-radius: 16px;
        align-self: center;
        justify-self: center;
        margin-right: 45px;
        &__img{
            max-width: 360px;
            height: 360px;
        }
        &__main{
            display: flex;
            flex-direction: row;
        }

        &__text{
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            margin-top: 10px;
        }

        &__title{
            font-weight: 600;
            font-size: 18px;
            margin-bottom: 30px;
        }

        &__date{
            font-size: 12px;
            font-weight: 600;
        }

        &__button{
            margin-left: 40px;
            margin-top: 70px;
        }
    }
</style>