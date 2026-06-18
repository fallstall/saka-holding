<script setup lang="ts">
import Button from '../ui/Button.vue' 
import Icon from '../../assets/images/ArrowRight.png'
import AboutEmblem from '../Aboutblock/aboutEmblem.vue';
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
                <div v-if="theme==='company'" class="Photocard__emblems">
                    <AboutEmblem theme="big" title="30" text="Лет на рынке текстиля"/>
                    <AboutEmblem theme="big" title="40+" text="Ассортимент товаров в наличии"/>
                    <AboutEmblem theme="small" title="10 000+" text="Клиентов выбирают нашу компанию"/>
                </div>
                <div v-if="theme==='home'" class="Photocard__button"><Button theme="full" text="Смотреть каталог" :icon="Icon" class="Photocard__btn-text" /></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

.Photocard {
    width: 100%;
    height: 100%;
    &--home{
        background-color: var(--gray);
    }
    &--company{
        background-color: var(--bg-color);
        padding-bottom: 50px;
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

    &__emblems{
        display: flex;
        flex-direction: row;
        padding-top: 50px;
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

@include tablet{
    .Photocard--home{
        padding: 42px 16px;

        height: auto;

        .Photocard__cont{
            width: 100%;
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
        }

        .Photocard__imgcont{
            width: 100%;
            margin: 32px 0 0;
        }

        .Photocard__img{
            width: 100%;
            height: auto;
            aspect-ratio: 1.2 / 1;
            border-radius: 8px;
        }

        .Photocard__textcont {
            width: 100%;
            margin: 0;
        }

        .Photocard__text {
            margin-top: 0;
            font-size: 20px;

            br {
                display: none;
            }
        }

        .Photocard__colortext {
            font-size: inherit;
        }

        .Photocard__row {
            margin-bottom: 24px;
        }

        .Photocard__text-el {
            font-size: 14px;

            br {
                display: none;
            }
        }

        .Photocard__btn-text {
            width: 260px !important;
        }
    }
    .Photocard--company{
        width: 100%;
        max-width: 100%;
        margin: 0;
        padding: 0 0 44px;

        .Photocard__cont {
            position: relative;
            width: 100%;
            display: grid;
            grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
            align-items: start;
            gap: 24px;
            padding-bottom: 52px;
        }

        .Photocard__imgcont {
            width: 100%;
            margin: 0;
        }

        .Photocard__img{
            width: 100%;
            height: auto;
            aspect-ratio: 0.78 / 1;
            border-radius: 8px;
        }

        .Photocard__textcont {
            width: 100%;
            margin: 0;
        }

        .Photocard__text {
            margin: 0 0 16px;
            font-size: 18px;
            line-height: 1.25;

            br {
                display: none;
            }
        }

        .Photocard__comp-el {
            margin: 0 0 12px;
            font-size: 12px;
            line-height: 1.4;

            br {
                display: none;
            }
        }

        .Photocard__emblems{
            position: absolute;
            right: 0;
            bottom: 0;
            width: 64%;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
            padding-top: 0;

            .emblem {
                width: 100%;
                max-width: 105px;
                height: auto;
                aspect-ratio: 1;
                margin: 0 auto;
            }

            .emblem__img {
                width: 18px;
                height: 18px;
            }

            .emblem__title--big {
                font-size: 27px;
            }

            .emblem__title--small {
                font-size: 22px;
            }

            .emblem__text {
                width: 82px;
                font-size: 9px;
            }
        }
    }
}

@include mobile{
    .Photocard--home{
        padding: 32px 12px;

        .Photocard__img{
            width: 100%;
        }

        .Photocard__textcont{
            margin: 0;
        }

        .Photocard__imgcont{
            margin: 24px 0 0;
        }

        .Photocard__text {
            font-size: 18px;
        }

        .Photocard__text-small {
            margin-top: 24px;
        }

        .Photocard__line {
            width: 28px;
            flex: 0 0 28px;
        }

        .Photocard__text-el {
            font-size: 12px;
        }

        .Photocard__btn-text {
            width: 100% !important;
        }
    }
    .Photocard--company{
        padding-bottom: 36px;

        .Photocard__cont{
            position: static;
            display: flex;
            flex-direction: column;
            align-items: stretch;
            padding-bottom: 0;
        }

        .Photocard__emblems{
            position: static;
            width: 100%;
            grid-template-columns: 1fr;
            gap: 12px;
            padding-top: 8px;

            .emblem {
                width: 104px;
                height: 104px;
            }

            .emblem:nth-child(odd) {
                margin-left: 22px;
            }

            .emblem:nth-child(even) {
                margin-right: 22px;
            }
        }

        .Photocard__textcont{
            margin: 20px 0 0;
        }

        .Photocard__img{
            width: 100%;
            max-width: 100%;
            aspect-ratio: 0.64 / 1;
        }

        .Photocard__text {
            margin-bottom: 14px;
            font-size: 16px;
        }

        .Photocard__comp-el {
            margin-bottom: 10px;
            font-size: 12px;
        }
    }
}
</style>
