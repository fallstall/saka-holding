<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import ArrowUpRight from '@/assets/images/news-card-img/ArrowUpRight.png';
import bgOne from '@/assets/images/news-card-img/news-back1.png'
import bgTwo from '@/assets/images/news-card-img/news-back2.png';
import bgTree from '@/assets/images/news-card-img/news-back3.png';
import bgFour from '@/assets/images/news-card-img/news-back4.png';
import bgFive from '@/assets/images/news-card-img/news-back5.png';
import bgSix from '@/assets/images/news-card-img/news-back6.png';
defineProps<{
    theme?: 'one' | 'two' | 'tree' | 'four' | 'five' | 'six'
    img?: string
}>()
</script>

<template>
<div class="newscard-one">
    <div class="newscard-one__head"
    :class="{
            'newscard-one__head--one': theme === 'one',
            'newscard-one__head--two': theme === 'two',
            'newscard-one__head--tree': theme === 'tree',
            'newscard-one__head--four': theme === 'four',
            'newscard-one__head--five': theme === 'five',
            'newscard-one__head--six': theme === 'six'
        }"
        :style="{
            backgroundImage: theme === 'one' ? `url(${bgOne})` : 
                           theme === 'two' ? `url(${bgTwo})` :
                           theme === 'tree' ? `url(${bgTree})` :
                           theme === 'four' ? `url(${bgFour})` :
                           theme === 'five' ? `url(${bgFive})` :
                           theme === 'six' ? `url(${bgSix})` : 'none'
        }">
        <Button theme="icon" :icon="ArrowUpRight" class="newscard-one__button"/>
        <p class="newscard-one__title">
            Пример текста <br>
            для заголовка новости
        </p>
    </div>
    <p class="newscard-one__text">
        Здесь будет находиться небольшое <br>
        триггерное описание или краткий <br>
        дискриптор новости
    </p>
    <span class="newscard-one__date">31.03.2022</span>
</div>
</template>

<style lang="scss">
@use '@/assets/styles/variables.scss' as *;
.newscard-one{
    box-sizing: border-box;
    display: flex;
    background-color: var(--black-color);
    width: 360px;
    height: 400px;
    border-radius: 16px;
    flex-direction: column;

    &__head{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 240px;
        background-position: center;
        background-size: cover;
        border-radius: 16px;
    }
    &__title{
        color: var(--text-light-color);
        font-family: Montserrat;
        font-weight: 600;
        font-size: 18px;
        margin-top: 100px;
        margin-left: 30px;
    }
    &__button{
        margin-left: auto;
        margin-right: 30px;
        margin-top: 30px;
    }

    &__text{
        margin-left: 30px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 300;
        color: var(--text-light-color);
        font-size: 14px;
    }
    &__date{
        font-size: 12px;
        color: var(--text-light-color);
        margin-left: 30px;
        margin-top: 20px;
    }
}

@include tablet {
    .newscard-one {
        width: 100%;
        height: 300px;
        border-radius: 8px;

        &__head {
            height: 180px;
            border-radius: 8px;
        }

        &__button {
            width: 34px;
            height: 34px;
            margin-top: 14px;
            margin-right: 14px;
        }

        &__title {
            margin: 68px 16px 0;
            font-size: 13px;
        }

        &__text {
            margin: 12px 16px 0;
            font-size: 10px;
            line-height: 1.35;

            br {
                display: none;
            }
        }

        &__date {
            margin: auto 16px 14px;
            font-size: 9px;
        }
    }
}

@include mobile {
    .newscard-one {
        width: 100%;
        height: 320px;

        &__title,
        &__text,
        &__date {
            margin-left: 22px;
        }

        &__button {
            margin-right: 22px;
        }
    }
}
</style>
