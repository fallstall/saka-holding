<script setup lang="ts">
    import CardCloth from '@/components/home/CardCloth.vue';
    import Button from '@/components/ui/Button.vue';

    import gray from '@/assets/images/cloth/gray.png'
    import red from '@/assets/images/cloth/Rectangle 126.png'
    import pink from '@/assets/images/cloth/pink.png'
    import blue from '@/assets/images/cloth/blue.png'
    import black from '@/assets/images/cloth/black.png'
    import blackgray from '@/assets/images/cloth/blackblue.png'   
</script>

<template>
    <div class="home-page">
        <div class="container">
            <div class="cards-wrapper">
                <div>
                    <p class="section-title">Выбирайте из множества разновидностей тканей</p>
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
</template>

<style lang="scss">
    .home-page {
        min-height: 100vh;
        display: flex;
        align-items: center;      
        justify-content: center; 
        font-family: Montserrat;
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
    .section-title {
    font-size: 26px;
    font-weight: 560;
    color: var(--bg-color);
    text-align: left;       
    margin-bottom: 30px;
    max-width: 400px;           
    margin-left: 10px;  
    margin-right: auto;
}

</style>