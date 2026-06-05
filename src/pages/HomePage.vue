<script setup lang="ts">
    import Subtitle from '@/components/home/Subtitle.vue';
    import Slider from '@/components/home/Slider.vue';
    import CardCloth from '@/components/home/CardCloth.vue';



    import gray from '@/assets/images/cloth/gray.png'
    import red from '@/assets/images/cloth/Rectangle 126.png'
    import pink from '@/assets/images/cloth/pink.png'
    import blue from '@/assets/images/cloth/blue.png'
    import black from '@/assets/images/cloth/black.png'
    import blackgray from '@/assets/images/cloth/blackblue.png'   
    import NewsCards from '../components/ui/news-cards/News-cards.vue'; 
</script>
<template>

<Subtitle /> 
<Slider />



    <div class="home-page">
        <!-- Контейнер для центрирования -->
        <div class="container">
            <div class="cards-wrapper">
                <div>
                    <CardCloth theme="max" :image="blue" />
                    <CardCloth theme="min" :image="gray" />
                    <CardCloth theme="avg" :image="pink" />
                </div>
                <div>
                    <CardCloth theme="min" :image="black" />
                    <CardCloth theme="avg" :image="blackgray" /> 
                    <CardCloth theme="max" :image="red" />
                </div>
            </div>
        </div>
    </div>


<NewsCards />


</template>
<style>
    .home-page {
        min-height: 100vh;
        display: flex;
        align-items: center;      
        justify-content: center; 
    }

    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        max-width: 100%;
        background-color: var(--black-color);
    }

    .cards-wrapper {
        display: flex;
        justify-content: center;  
        align-items: center;      
        gap: 5px;
        flex-direction: column;
    }

</style>
