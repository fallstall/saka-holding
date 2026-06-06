<script setup lang="ts">
// import BottomBlockFull from '@/components/catalog/BottomBlockFull.vue'

</script>

<template>
    <div class="left-block">
        <div class="left-block__slider-cnt">
            <input
                class="left-block__slider-input"
                type="range"
                min="0"
                max="100000"
                step="1000"
                value="35000"
            >

            <div class="left-block__slider-labels">
                <span>0₽</span>
                <span>100 000₽</span>
            </div>
        </div>
        <div class="left-block__type-cnt">
            <p class='left-block__title'>Тип полотна</p>
            <img class="left-block__icon" src="./../../assets/images/right.png" alt="">
        </div>
        <div class="left-block__quality-cnt">
            <div class="left-block__section-head">
                <p class="left-block__title">Качество</p>
                <img class="left-block__icon" src="./../../assets/images/down.png" alt="">
            </div>
            <ul class="left-block__quality-list">
                <li class="left-block__quality-item"><span>Кулирная гладь</span><span class="left-block__quality-marker"></span></li>
                <li class="left-block__quality-item"><span>Рибана</span><span class="left-block__quality-marker"></span></li>
                <li class="left-block__quality-item"><span>Пике</span><span class="left-block__quality-marker left-block__quality-marker--active"></span></li>
                <li class="left-block__quality-item"><span>Интерлок</span><span class="left-block__quality-marker"></span></li>
                <li class="left-block__quality-item"><span>Футер 2-х нитка</span><span class="left-block__quality-marker"></span></li>
                <li class="left-block__quality-item"><span>Футер 3-х нитка</span><span class="left-block__quality-marker"></span></li>
                <li class="left-block__quality-item"><span>Кашкорсе к 2х нитке</span><span class="left-block__quality-marker"></span></li>
                <li class="left-block__quality-item"><span>Кашкорсе к 3х нитке</span><span class="left-block__quality-marker"></span></li>
                <li class="left-block__quality-item"><span>Double Face</span><span class="left-block__quality-marker"></span></li>
            </ul>
        </div>
        <div class="left-block__color-cnt">
            <div class="left-block__section-head">
                <p class="left-block__title">Цвет</p>
                <img class="left-block__icon" src="./../../assets/images/down.png" alt="">
            </div>
            <div class="left-block__color-grid">
                <img src="./../../assets/images/colors/yellow.png" alt="Жёлтый">
                <img src="./../../assets/images/colors/dark-green.png" alt="Тёмно-зелёный">
                <img src="./../../assets/images/colors/dark-blue.png" alt="Синий">
                <img src="./../../assets/images/colors/gray.png" alt="Серый">
                <img src="./../../assets/images/colors/dark-red.png" alt="Красный">
                <img src="./../../assets/images/colors/light-purple.png" alt="Сиреневый">
                <img src="./../../assets/images/colors/dark-purple.png" alt="Фиолетовый">
                <img class="left-block__color-active" src="./../../assets/images/colors/ohra.png" alt="Оранжевый">
                <img src="./../../assets/images/colors/white.png" alt="Белый">
                <img src="./../../assets/images/colors/dark-ohra.png" alt="Охра">
                <img src="./../../assets/images/colors/white.png" alt="Белый">
                <img src="./../../assets/images/colors/light-purple.png" alt="Сиреневый">
                <img src="./../../assets/images/colors/ohra.png" alt="Оранжевый">
                <img src="./../../assets/images/colors/dark-ohra.png" alt="Охра">
                <img src="./../../assets/images/colors/yellow.png" alt="Жёлтый">
                <img src="./../../assets/images/colors/dark-green.png" alt="Тёмно-зелёный">
                <img src="./../../assets/images/colors/white.png" alt="Белый">
            </div>
        </div>
        <div class="left-block__color-big-cnt">
            <div class="left-block__section-head">
                <p class="left-block__title">Цвет</p>
                <img class="left-block__icon" src="./../../assets/images/down.png" alt="">
            </div>
            <ul class="left-block__color-list">
                <li><img src="./../../assets/images/colors/yellow.png" alt=""><span>Желтый</span></li>
                <li><img src="./../../assets/images/colors/dark-green.png" alt=""><span>Темно-зеленый</span></li>
                <li><img src="./../../assets/images/colors/dark-blue.png" alt=""><span>Синий</span></li>
                <li><img src="./../../assets/images/colors/gray.png" alt=""><span>Темно-голубой</span></li>
                <li><img src="./../../assets/images/colors/dark-red.png" alt=""><span>Красно-пурпурно-бордовый</span></li>
                <li><img src="./../../assets/images/colors/light-purple.png" alt=""><span>Нежненький</span></li>
            </ul>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .left-block {
        width: 260px;
        height: 895px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;


        &__slider-cnt {
            width: 260px;
            height: 70px;
            background-color: var(--gray);
            padding: 10px 20px 10px 20px;
            border-radius: 16px;
        }

        &__slider-input {
            width: 100%;
            height: 20px;
            margin: 0;

            appearance: none;
            -webkit-appearance: none;

            background: transparent;
            cursor: pointer;
        }

        &__slider-input::-webkit-slider-runnable-track {
            height: 3px;
            background-color: var(--gray-60);
            border-radius: 10px;
        }

        &__slider-input::-webkit-slider-thumb {
            appearance: none;
            -webkit-appearance: none;

            width: 18px;
            height: 18px;
            margin-top: -7.5px;

            border: none;
            border-radius: 50%;
            background-color: var(--gold-color);
        }

        &__slider-input::-moz-range-track {
            height: 3px;
            border-radius: 10px;
        }

        &__slider-input::-moz-range-thumb {
            width: 18px;
            height: 18px;

            border: none;
            border-radius: 50%;
            background-color:  var(--gold-color);
        }

        &__slider-labels {
            display: flex;
            justify-content: space-between;

            margin-top: 4px;

            font-size: 10px;
            font-weight: 500;
            letter-spacing: 1px;
            color: var(--gray-80);
        }
        // 1 компонент закончился
        &__type-cnt {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0px 20px 0px 20px;
            width: 260px;
            height: 50px;
            background-color: var(--gray);
            border-radius: 16px;
        }
        &__title {
            font-size: 12px;
            font-weight: 500;

        }

        &__quality-cnt,
        &__color-cnt,
        &__color-big-cnt {
            width: 260px;
            padding: 18px 20px;
            border-radius: 16px;
            background-color: var(--gray);
        }

        &__quality-cnt {
            min-height: 370px;
        }

        &__color-cnt {
            min-height: 130px;
        }

        &__color-big-cnt {
            min-height: 250px;
        }

        &__section-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 18px;
        }

        &__section-head &__title {
            margin: 0;
        }

        &__down-icon {
            width: 12px;
            height: 7px;
            object-fit: contain;
        }

        &__quality-list,
        &__color-list {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        &__quality-list {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        &__quality-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--text-dark-color);
            font-size: 13px;
            font-weight: 400;
        }

        &__quality-marker {
            width: 20px;
            height: 20px;
            flex: 0 0 20px;
            border: 2px solid var(--bg-color);
            border-radius: 50%;
            background-color: var(--bg-color);

            &--active {
                background-color: var(--gold-color);
            }
        }

        &__color-grid {
            display: grid;
            grid-template-columns: repeat(9, 20px);
            gap: 10px 5px;
        }

        &__color-grid img,
        &__color-list img {
            width: 20px;
            height: 20px;
            display: block;
            border-radius: 50%;
            object-fit: cover;
        }

        &__color-grid &__color-active {
            outline: 2px solid var(--text-dark-color);
            outline-offset: 1px;
        }

        &__color-list {
            display: flex;
            flex-direction: column;
            gap: 11px;

            li {
                display: flex;
                align-items: center;
                gap: 10px;
                color: var(--text-dark-color);
                font-size: 13px;
                font-weight: 400;
            }
        }


    }
</style>
