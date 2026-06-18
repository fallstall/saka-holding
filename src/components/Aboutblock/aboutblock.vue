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
.about {
    width: 100%;
    max-width: 1160px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 50px;

    &__title {
        margin-bottom: 18px;
    }

    &__page-title {
        width: 100%;
        margin: 0;
        padding-bottom: 20px;
    }
}

@include tablet {
    .about {
        max-width: 100%;
        padding: 32px 16px 0;

        &__title {
            width: 100%;
            margin-bottom: 14px;
        }

        &__page-title {
            width: 100%;
            padding-bottom: 16px;
        }
    }
}

@include mobile {
    .about {
        padding: 24px 12px 0;

        &__title {
            margin-bottom: 10px;
        }
    }
}
</style>
