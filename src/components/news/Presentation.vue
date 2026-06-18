<script setup lang="ts">
import SubtitlePage from '../SubtitlePage.vue';
import TitlePage from '../TitlePage.vue';
import Button from '../ui/Button.vue';
import ArrowRight from '../../assets/images/ArrowRight.png'


</script>

<template>
<div class="pres">
    <div class="pres__title-page">
        <SubtitlePage subtitle="ГЛАВНАЯ"/>
        <TitlePage title="НОВОСТИ И СТАТЬИ"/>
    </div>
    <div class="pres__block">
        <div class="pres__main">
            <span class="pres__title">Презентация<br>о Saka Tekstil</span>
            <span class="pres__text">Посмотрите презентацию о том, какие<br>
                 возможности открывает компания Saka<br> Tekstil</span>
            <Button class="pres__btn" theme="full" :icon="ArrowRight" text="Смотреть презентацию"/>
        </div>
        <img class="pres__img" src="../../assets/images/cardPhoto-img/homebg.png">
    </div>
</div>
</template>

<style lang="scss">
.pres{
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding-top: 40px;
    &__title-page{
        display: flex;
        flex-direction: row;
    }
    &__block{
        display: flex;
        flex-direction: row;
        width: 1160px;
        height: 460px;
        background-color: var(--black-color);
        border-radius: 16px;
        margin-top: 40px;
    }
    &__main{
        display: flex;
        flex-direction: column;
        margin-top: 80px;
        margin-left: 100px;
        padding-right: 185px;

    }
    &__title{
        color: var(--bg-color);
        font-size: 32px;
        font-weight: 600;
        padding-bottom: 30px;
    }
    &__img {
        max-height: 460px;
        max-width: 732px;
        clip-path: polygon(60% 0%, 100% 0%, 100% 100%, 0% 100%);
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        
    }

    &__text{
        font-size: 18px;
        color: var(--bg-color);
        font-weight: 400;
    }

    &__btn {
        width: 336px !important;
        height: 60px !important;
        padding: 0 !important;
        margin-top: 40px;

        .btn__text {
            font-size: 16px;
            padding-left:20px;
        }

        .btn__icon{
            padding-right: 10px;
        }
    }
}

@include tablet {
    .pres {
        width: calc(100% - 48px);
        margin: 0 auto;
        padding-top: 28px;

        &__title-page {
            width: 100%;
        }

        &__block {
            position: relative;
            width: 100%;
            height: 390px;
            margin-top: 20px;
            overflow: hidden;
            border-radius: 8px;
        }

        &__main {
            position: relative;
            z-index: 2;
            width: 62%;
            margin: 0;
            padding: 66px 0 0 50px;
        }

        &__title {
            padding-bottom: 18px;
            font-size: 26px;
            line-height: 1.1;
        }

        &__text {
            font-size: 13px;
            line-height: 1.45;

            br {
                display: none;
            }
        }

        &__btn {
            width: 245px !important;
            height: 48px !important;
            margin-top: 26px;

            .btn__text {
                padding-left: 16px;
                font-size: 12px;
            }
        }

        &__img {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 76%;
            max-width: none;
            height: 72%;
            object-fit: cover;
            object-position: center bottom;
            clip-path: polygon(55% 0, 100% 0, 100% 100%, 0 100%);
            border-radius: 0 0 8px 0;
        }
    }
}

@include mobile {
    .pres {
        width: calc(100% - 40px);
        padding-top: 22px;

        &__block {
            height: 342px;
            margin-top: 16px;
        }

        &__main {
            width: 100%;
            padding: 38px 18px 0;
        }

        &__title {
            font-size: 22px;
        }

        &__text {
            width: 88%;
            font-size: 11px;
        }

        &__btn {
            width: 100% !important;
            max-width: 230px;
            height: 44px !important;
            margin-top: 20px;
        }

        &__img {
            width: 100%;
            height: 47%;
            clip-path: polygon(45% 0, 100% 0, 100% 100%, 0 100%);
        }
    }
}
</style>
