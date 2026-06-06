<script>

</script>
<template>
    <div class="subtitle__main-div">
        <img src="./../../assets/images/sale.png" alt="">
        <div class="subtitle__row-div">
            <img src="./../../assets/images/kitchen_glad.png" alt="">
            <p>Кулинарная гладь</p>
            <img src="./../../assets/images/footer_fabric.png" alt="">
            <p>Футер</p>
            <img src="./../../assets/images/kashkorse.png" alt="">
            <p>Кашкорсе, рибана</p>
            <img src="./../../assets/images/pike.png" alt="">
            <p>Пике</p>
            <img src="./../../assets/images/interlok.png" alt="">
            <p>Интерлок</p>
            <img src="./../../assets/images/kapitony.png" alt="">
            <p>Капитоний</p>
            <img src="./../../assets/images/selanick.png" alt="">
            <p>Селаник</p>
            <img src="./../../assets/images/velur.png" alt="">
            <p>Велюр</p>
            <img src="./../../assets/images/viscoze.png" alt="">
            <p>Вискоза</p>
        </div>
    </div>
</template>
<style scoped lang="scss">

    .subtitle__main-div {
        padding-left: 120px;
        max-width: 100vw;
        min-height: 50px;
        margin: 0 auto;
        background-color: var(--black-color);
        color: white;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        align-items: center;
        gap: 40px;

        .subtitle__row-div {
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            align-items: center;
            gap: 30px;
        }
    }
@include laptop {

    .subtitle__main-div {
        display: none;

        .subtitle__row-div {
            display: none;
        }
    }
}
</style>