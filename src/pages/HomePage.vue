<script setup lang="ts">
import Subtitle from '@/components/home/Subtitle.vue'
import Slider from '@/components/home/Slider.vue'
import Cardfull from '@/components/home/Cardfull.vue'
import FabricSlider from '@/components/ui/FabricSlider.vue'
import SertSlider from '@/components/ui/SertSlider.vue'
import Title from '@/components/ui/Title.vue'
import NewsCards from '../components/ui/news-cards/News-cards.vue'
</script>

<template>
    <Subtitle />
    <Slider />
    <NewsCards />
    <Cardfull />
    <Title text="Saka Tekstil дорожит своей репутацией" theme="center" />
    <SertSlider />
    <FabricSlider />
</template>
