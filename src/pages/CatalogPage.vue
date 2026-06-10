<script setup lang="ts">
import BottomBlockFull from '@/components/catalog/BottomBlockFull.vue'
import SubtitlePage from '../components/SubtitlePage.vue';
import TitlePage from '../components/TitlePage.vue';

</script>
 
<template>
    <div class="cat-title">
        <SubtitlePage subtitle="ГЛАВНАЯ"/>
        <TitlePage title="КАТАЛОГ"/>
    </div>
    <div class="catalog-page">
        <BottomBlockFull />
    </div>
</template>
<style scoped lang="scss">
    .catalog-page {
        padding-left: 170px;
    }
    .cat-title{
        padding-left: 170px;
        padding-top: 100px;
        padding-bottom: 50px;
    }
</style>