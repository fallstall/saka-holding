<script setup lang="ts">
    import CardCloth from '@/components/home/CardCloth.vue';
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
                <p class="section-title">Выбирайте из множества разновидностей тканей</p>
                <div>
                    
                    <CardCloth theme="max" :image="blue" button-text="Футер 3-х Нитка" />
                    <CardCloth theme="min" :image="gray" button-text="Френч Терри" />
                    <CardCloth theme="avg" :image="pink" button-text="Вискоза" />
                </div>
                <div>
                    <CardCloth theme="min" :image="black" button-text="Пике" />
                    <CardCloth theme="avg" :image="blackgray" button-text="Кулинарная гладь" />
                    <CardCloth theme="max" :image="red" button-text="Бифлекс" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-page {
        width: 100%;
        padding: 70px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--black-color);
        font-family: Montserrat;
    }

    .container {
        width: min(1160px, calc(100vw - 48px));
        margin: 0 auto;
    }

    .cards-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        flex-direction: column;
    }

    .cards-wrapper > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
    }

    .section-title {
        font-size: 26px;
        font-weight: 560;
        color: var(--text-light-color);
        text-align: left;
        margin: 0 0 30px 10px;
        max-width: 430px;
        margin-right: auto;
    }

    @include laptop {
        .home-page {
            padding: 48px 0;
        }

        .container {
            width: min(100% - 32px, 680px);
        }

        .cards-wrapper > div {
            flex-direction: column;
            gap: 18px;
        }
    }

</style>
