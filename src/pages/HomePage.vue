<script setup lang="ts">
import Subtitle from '@/components/home/Subtitle.vue'
import Slider from '@/components/home/Slider.vue'
import Cardfull from '@/components/home/Cardfull.vue'
import FabricSlider from '@/components/ui/FabricSlider.vue'
import SertSlider from '@/components/ui/SertSlider.vue'
import Title from '@/components/ui/Title.vue'
import NewsCards from '../components/ui/news-cards/News-cards.vue'
import cardPhoto from '@/components/ui/cardPhoto.vue'
import cardPhotohome from '../assets/images/cardPhoto-img/homebg.png'
import Order from '@/components/home/Order.vue'
</script>

<template>
    <Subtitle />
    <Slider />
    <NewsCards />
    <Cardfull />
    <cardPhoto theme="home" :img="cardPhotohome"/>
    <Title text="Saka Tekstil дорожит своей репутацией" theme="center" />
    <SertSlider />
    <Order />
    <FabricSlider />
</template>
