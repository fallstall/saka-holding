<script setup lang="ts">
import Palletecolor from './Palletecolor.vue';
import Warning from './warning.vue';
import darkgrey from '../../../assets/images/t-shirts/dark-grey.png'
import grey from '../../../assets/images/t-shirts/grey.png'
import white from '../../../assets/images/t-shirts/white.png'
import black from '../../../assets/images/t-shirts/black.png'
import darkblue from '../../../assets/images/t-shirts/dark-blue.png'
import blue from '../../../assets/images/t-shirts/blue.png'
import lightblue from '../../../assets/images/t-shirts/light-blue.png'
import orange from '../../../assets/images/t-shirts/orange.png'
import green from '../../../assets/images/t-shirts/green.png'
import yellow from '../../../assets/images/t-shirts/yellow.png'
import purple from '../../../assets/images/t-shirts/purple.png'
import red from '../../../assets/images/t-shirts/red.png'
import Title from '../Title.vue';
</script>

<template>
    <div class="palette">
        <div class="palette__head">
            <span class="palette__title">Актуальная палитра “Saka Tekstil”<br>
            из 45+ цветов – поможет решить<br>
            любые задачи, стоящие перед вами</span>
            <Warning class="palette__warn"/>
        </div>
        <div class="palette__col">
            <div class="palette__row">
                <Palletecolor :img1="darkgrey" :img2="grey" :img3="white" name1="A-104 Dark Grey"
                name2="A-101 Grey" name3="A-115 White"/>
                  <Palletecolor :img1="black" :img2="darkblue" :img3="blue" name1="A-123 Black"
                name2="A-106 Dark Blue" name3="A-107 Blue"/>
            </div>
            <div class="palette__row">
                <Palletecolor :img1="lightblue" :img2="orange" :img3="green" name1="A-118 Light Blue"
                name2="A-135 Orange" name3="A-136 Green"/>
                  <Palletecolor :img1="yellow" :img2="purple" :img3="red" name1="A-125 Yellow"
                name2="A-201 Purple" name3="A-100 Red"/>
            </div>
        </div>
        <Title class="palette__tit" theme="left" text="Сезонная палитра"/>
        <div class="palette__col">
            <div class="palette__row">
                <Palletecolor :img1="darkgrey" :img2="grey" :img3="white" name1="A-104 Dark Grey"
                name2="A-101 Grey" name3="A-115 White"/>
                  <Palletecolor :img1="black" :img2="darkblue" :img3="blue" name1="A-123 Black"
                name2="A-106 Dark Blue" name3="A-107 Blue"/>
            </div>
            <div class="palette__row">
                <Palletecolor :img1="lightblue" :img2="orange" :img3="green" name1="A-118 Light Blue"
                name2="A-135 Orange" name3="A-136 Green"/>
                  <Palletecolor :img1="yellow" :img2="purple" :img3="red" name1="A-125 Yellow"
                name2="A-201 Purple" name3="A-100 Red"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .palette{
        justify-self: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        margin-top: 100px;
        padding-left: 80px;
        padding-bottom: 40px;

        &__head{
            display: flex;
            flex-direction: row;
            margin-bottom: 100px;
        }

        &__title{
            font-size: 26px;
            font-weight: 600;
            margin-right: 80px;
        }

        &__row{
            display: flex;
            flex-direction: row;
            padding-bottom: 60px;
            
        }

        &__tit{
            margin-bottom: 60px;
        }
    }
@include tablet {
    .palette {
        width: calc(100% - 32px);
        margin: 56px auto 0;
        padding: 0 0 36px;

        &__head {
            flex-direction: column;
            margin-bottom: 40px;
        }

        &__title {
            margin: 0 0 24px;
            font-size: 20px;
        }

        &__warn {
            width: 100%;
        }

        &__row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
            padding-bottom: 20px;
        }

        &__tit {
            width: 100%;
            margin: 28px 0 28px;
        }
    }
}
@include mobile{
    .palette {
        width: calc(100% - 24px);
        margin-top: 42px;

        &__warn {
            display: none;
        }

        &__title {
            font-size: 18px;
        }

        &__col {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 20px 14px;
        }

        &__row {
            display: contents;
        }
    }
}
</style>
