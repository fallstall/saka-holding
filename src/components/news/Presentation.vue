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
</style>