<script setup lang="ts">
import BottomBlockFull from '@/components/catalog/BottomBlockFull.vue'
import SubtitleCatalog from '@/components/catalog/SubtitleCatalog.vue'
import SubtitlePage from '../components/SubtitlePage.vue';
import TitlePage from '../components/TitlePage.vue';
import Title from '@/components/ui/Title.vue';
import FabricSlider from '@/components/ui/FabricSlider.vue'

</script>
<template>
    <div class="cat-title">
        <SubtitlePage subtitle="ГЛАВНАЯ"/>
        <TitlePage title="КАТАЛОГ"/>
    </div>
        <Title
        text="Позаботьтесь о себе и своих близких, выбирайте качественные ткани"
        theme="left"
        class="catalog-page__text-left" />
    <div class="catalog-page">
        <SubtitleCatalog />
        <BottomBlockFull />
    </div>
    <FabricSlider />
</template>
<style scoped lang="scss">
    .catalog-page {
        padding-bottom: 30px;
        padding-left: 300px;

        &__text-left {
            width: 999px;
            height: 80px;
            font-size: 32px;
            padding-left: 300px;
            letter-spacing: 2%;
            line-height: 133,4%;
        }

    }
    .cat-title{
        padding-left: 300px;
        padding-top: 100px;
        padding-bottom: 10px;
    }

    @include tablet {
        .cat-title {
            width: calc(100% - 48px);
            margin: 0 auto;
            padding: 34px 0 14px;
        }

        .catalog-page {
            width: calc(100% - 48px);
            margin: 0 auto;
            padding: 0 0 46px;

            &__text-left {
                width: calc(100% - 48px);
                height: auto;
                margin: 0 auto 18px;
                padding: 0;
                font-size: 24px;
                line-height: 1.18;
            }
        }
    }

    @include mobile {
        .cat-title {
            width: calc(100% - 40px);
            padding-top: 26px;
            padding-bottom: 12px;
        }

        .catalog-page {
            width: calc(100% - 40px);
            padding-bottom: 34px;

            &__text-left {
                width: calc(100% - 40px);
                margin-bottom: 14px;
                font-size: 20px;
            }
        }
    }
</style>
