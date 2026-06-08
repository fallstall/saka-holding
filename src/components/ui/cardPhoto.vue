<script setup lang="ts">
import Button from '../ui/Button.vue' 
import Icon from '../../assets/images/ArrowRight.png'
defineProps<{
    theme?: 'home' | 'company' 
    img?: string
    text?:string
    colortext?:string
}>()
</script>

<template>
    <div class="Photocard" :class="`Photocard--${theme}`">
        <div class="Photocard__cont">
            <div class="Photocard__imgcont">
                <img class="Photocard__img"
                :src="img"
                alt="">
            </div>
            <div class="Photocard__textcont">
                <p v-if="theme === 'home'" class="Photocard__text">
                    Saka Tekstil – для тех, кто хочет быстро<br>
                    и комфортно получать текстильную<br> продукцию
                    <span v-if="theme === 'home'" class="Photocard__colortext">высокого качества<br> 
                        по адекватной стоимости</span></p>
                <p v-if="theme === 'company'" class="Photocard__text">Saka Tekstil - производство и продажа<br>
                    турецкого трикотажного полотна</p>
                <div v-if="theme==='home'" class="Photocard__text-small">
                    <div class="Photocard__row">
                        <div class="Photocard__line"></div>
                        <span class="Photocard__text-el">Предоставляем возможность закупки<br>
                             широкого ассортимента: футер, кулирка,<br>
                              джакарт, флис, рибана и многое другое…</span>
                    </div>
                    <div class="Photocard__row">
                        <div class="Photocard__line"></div>
                        <span class="Photocard__text-el">Наша компания является надежным <br>
                            поставщиком и производителем турецкого<br>
                             трикотажного полотна по всему миру</span>
                    </div>
                </div>
                <div v-if="theme==='company'" class="Photocard__comp-text">
                    <p class="Photocard__comp-el">
                        Мы осуществляем продажу ткани от рулона<br> и нарезку кашкорсе от 5%-20%
                    </p>
                    <p class="Photocard__comp-el">
                        Наша команда следит за трендами в мире<br> 
                        трикотажа, мы постоянно обновляем наш<br> 
                        ассортимент и регулярно контролируем<br>
                         наличие ткани на складе
                    </p>
                    <p class="Photocard__comp-el">
                        Мы предлагаем клиентам различные виды<br> 
                        трикотажных полотен высокого качества<br>
                        более, чем в 45 цветовых вариациях
                    </p>
                </div>
                <div v-if="theme==='home'" class="Photocard__button"><Button theme="full" text="Смотреть каталог" :icon="Icon" class="Photocard__btn-text" /></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.Photocard {
    width: 100%;
    height: 640px;
    &--home{
        background-color: var(--gray);
    }
    &--company{
        background-color: var(--bg-color);
    }
    &__cont{
        display: flex;
        flex-direction: row;
        justify-self: center;
    }
    &__img{
        width: 520px;
        height: 640px;
        object-fit: cover;
        border-top-right-radius: 10px ;
        
    }

    &__text{
        font-weight: 600;
        font-size: 26px;
        
        
    }

    &__colortext{
        font-weight: 600;
        color: var(--darkGold);
        font-size: 26px;
    }

    &__imgcont{
        display: flex;
        gap: 50px;
        margin-left: -300px;
    }

    &__textcont{
        margin-left: 100px;
        margin-top: 40px;
    }
    &__row{
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        margin-bottom: 40px;
    }
    &__line{
        width: 40px;
        height: 4px;
        background-color: var(--darkGold);
        margin-top: 10px;
    }

    &__text-small{
        margin-top: 30px;
        
    }

    &__text-el{
        margin-left: 15px;
        font-size: 18px;
    }

    &__comp-text{
            display: flex;
            flex-direction: column;
        }

    &__comp-el{
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 400;
    }

    &__btn-text {
        width: 300px !important;
        height: 58px !important;
        padding: 0 !important;
        margin-top: 40px;

        .btn__text {
            font-size: 16px;
            padding-left: 30px;
        }

        .btn__icon{
            padding-right: 10px;
        }
    }
}
</style>