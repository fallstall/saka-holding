<script setup lang="ts">
import ArtCards from '../components/news/ArtCards.vue';
import Articles from '../components/news/Articles.vue';
import Artnav from '../components/news/Artnav.vue';
import Presentation from '../components/news/Presentation.vue';
import NewsCards from '../components/ui/news-cards/News-cards.vue';


</script>

<template>
<main class="news-page">
    <Presentation/>
    <NewsCards/>
    <Articles/>
    <Artnav/>
    <ArtCards/>
</main>
</template>

<style scoped lang="scss">
.news-page {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
}
</style>
