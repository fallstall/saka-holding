<script setup lang="ts">
import Button from '../ui/Button.vue';
import PriceInput from './priceInput.vue';
import User from '../../assets/images/input-icons/User.png'
import Email from '../../assets/images/input-icons/Envelope.png'
import Phone from '../../assets/images/input-icons/Phone.png'
import Adres from '../../assets/images/input-icons/MapPin.png'

defineProps<{
    isOpen: boolean
}>()

const emit = defineEmits<{
    close: []
}>()

const closeModal = () => {
    emit('close')
}
</script>

<template>
    <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
        <div class="pricelist">
            <div class="pricelist__main">
                <span class="pricelist__title">Заказать прайс-лист и каталог</span>
                <span class="pricelist__subtitle">Оставьте заявку и получите образцы</span>
                <price-input :icon="User" theme="name"/>
                <price-input :icon="Email" theme="email"/>
                <price-input :icon="Phone" theme="phone"/>
                <price-input :icon="Adres" theme="adres"/>
                <Button  theme="text" text="Оставить заявку" @click="closeModal" class="btn" />
                <span class="pricelist__text">Нажимая на кнопку вы даете свое согласие на обработку<br> 
                    персональных данных. Гарантируем! Спама не будет!</span>
            </div>
            <div class="pricelist__back">
                <button class="pricelist__close" @click="closeModal">
                    <img src="../../assets/images/input-icons/X.png " class="pricelis__clim">
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .btn{
        max-width: 320px !important;
        height: 55px !important;
        padding: 0 !important;
        border-radius: 100px !important;
        background-color: var(--gold-color, #000) !important; 

        &:deep(.btn__text) {
        font-size: 16px !important;
        font-weight: 700 !important;
        }

        }
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
        padding: 20px;
    }

    .pricelist{
       display: flex;
       flex-direction: row;
       max-width: 960px; 
       max-height: 588px;
       width: 100%;
       height: 100%;
       background-color: var(--gray);
       border-radius: 16px;
       position: relative;

       &__main{
        position: absolute;
        display: flex;
        flex-direction: column;
        padding-left: 40px;
        padding-top: 50px;
        width: 50%;
        z-index: 2;
       }

       &__title{
        font-size: 24px;
        font-weight: 600;
       }

       &__subtitle{
        font-size: 14px;
        font-weight: 400px;
        padding-top: 10px;
        padding-bottom: 30px;
       }

       &__text{
        opacity: 50%;
        font-size: 10px;
        font-weight: 400;
        padding-top: 30px;
       }

       &__back{
        max-width: 560px;
        max-height: 588px;
        width: 100%;
        height: 100%;
        background-image: url('../../assets/images/input-icons/priceback.png');
        border-radius: 16px;
        margin-left: 406px;
        background-size: cover;
        background-position: center;
       }

       &__close{
        border: none;
        background-color: transparent;
        padding-left: 510px;
        padding-top: 10px;
       }
    }


    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

@include tablet{
.pricelist{
    padding: 42px 16px;
    height: auto;
    &__main{
        background-color: var(--gray);
        position: relative;
        width: 100%;
        padding: 0;
    }
    &__back{
        display: none;
    }
    .pricelist__close{
        padding-left: 0;
        position: absolute;
        top: 20px;
        right: 20px;
    }
}
}
@include mobile{
    .pricelist{
    padding: 42px 16px;
    height: auto;
    &__main{
        background-color: var(--gray);
        position: relative;
        height: auto;
        width: 100%;
        padding: 0;
    }
    &__back{
        display: none;
    }
    .pricelist__close{
        padding-left: 0;
        position: absolute;
        top: 20px;
        right: 20px;
    }
}   
}
</style>