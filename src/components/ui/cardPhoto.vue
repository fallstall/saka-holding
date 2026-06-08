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
        height: auto;
        .Photocard__cont{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        }
        .Photocard__imgcont{
            margin-left: 70px;
            margin-top: 50px;
            margin-bottom: 100px;
        }
        .Photocard__img{
            width: 698px;
            height: 639px
        }
    }
    .Photocard--company{
        max-width: 960px;
        margin-left: 130px;
        margin-bottom: 50px;
        .Photocard__img{
            width: 339px;
            height: 576px
        }
        .Photocard__emblems{
            position: absolute;
            margin-left: -250px;
        }
    }
    .Photocard__textcont{
        margin-left: 20px;
        margin-right: 150px;
        margin-top: -60px;
    }
}

@include mobile{
    .Photocard--home{
        .Photocard__img{
            width: 360px;
            height:639px;
            
        }
        .Photocard__textcont{
            margin-right: 80px;
        }
        .Photocard__imgcont{
            margin-right: 90px;
        }
    }
    .Photocard--company{
        
        .Photocard__cont{
            display: flex;
            flex-direction: column;

            align-items: center;
        }
        .Photocard__emblems{
            position: relative;
            display: flex;
            flex-direction: column;
            margin-left: 200px;
            > :first-child {
                margin-left: -150px;
            }
            > :nth-child(3) {
                margin-left: -150px;
            }

        }
        
        .Photocard__textcont{
            margin-left: -50px;
            margin-top: 50px;
        }
        .Photocard__img{
            width: 330px;
            height: 576px;
        }
    }
}
</style>