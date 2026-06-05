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
    justify-self: center;
    flex-direction: column;
    &__row{
        margin-bottom: 40px;
        display: flex;
        flex-direction: row;
    }
}
</style>