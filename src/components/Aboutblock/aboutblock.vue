<script setup lang="ts">
import SubtitlePage from '../SubtitlePage.vue';
import TitlePage from '../TitlePage.vue';
import CardPhoto from '../ui/cardPhoto.vue';
import Title from '../ui/Title.vue';
import compbg from '../../assets/images/cardPhoto-img/compbg.png'

</script>

<template>
    <div class="about">
        <div class="about__title">
            <SubtitlePage subtitle="ГЛАВНАЯ"/>
            <TitlePage title="О КОМПАНИИ"/>
        </div>
        <Title class="about__page-title" theme="left" text="О КОМПАНИИ"/>
        <CardPhoto theme="company" :img="compbg"/>
    </div>
</template>

<style lang="scss">
    .about{
        justify-self: center;
        max-width: 1400px;
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        padding-left: 150px;

        &__title{
            margin-left: -140px;
        }

        &__page-title{
            margin-left: -150px;
            padding-bottom: 20px;
        }
    }
</style>