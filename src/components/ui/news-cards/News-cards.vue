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

        &:first-child{
            
            margin-bottom: 20px;
        }
    }
}

@include tablet{
    .news-card {
        width: calc(100% - 32px);
        padding: 32px 0;

        &__row:first-child {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;

            & > *:nth-child(3) {
                display: none;
            }
        }

        &__row:not(:first-child) {
            display: none;
        }
    }
}
@include mobile{
    .news-card{
        width: calc(100% - 24px);
        margin: 0 auto;
        padding: 24px 0;

        &__row:first-child {
            grid-template-columns: 1fr;
            gap: 12px;
        }
    }
}
</style>
