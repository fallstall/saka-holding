<script setup lang="ts">
import Newscard from '@/components/ui/news-cards/News-card-one.vue';
</script>

<template>
    <div class="news-card">
        <div class="news-card__row">
            <Newscard theme="one"/>
            <Newscard theme="two"/>
            <Newscard theme="tree"/>
        </div>
        <div class="news-card__row">
            <Newscard theme="four"/>
            <Newscard theme="five"/>
            <Newscard theme="six"/>
        </div>
    </div>
</template>

<style lang="scss">
.news-card{
    width: min(1160px, calc(100vw - 48px));
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px 0;

    &__row{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 40px;

        &:not(:last-child) {
            margin-bottom: 40px;
        }
    }
}

@include laptop {
    .news-card {
        width: min(100% - 32px, 680px);
        padding: 48px 0;

        &__row {
            flex-direction: column;
            align-items: center;
            gap: 24px;

            &:not(:last-child) {
                margin-bottom: 24px;
            }
        }
    }
}
</style>
