<script setup lang="ts">
defineProps<{
    theme?: 'name'| 'email'|'phone'|'adres'
    icon?:string
}>()
</script>

<template>
<div class="prin">
    <img :src="icon" class="prin__icon">
    <input v-if="theme==='name'" type="text" id="name" placeholder="Имя" class="prin__input">
    <input v-if="theme==='email'" type="email" id="email" placeholder="E-Mail"class="prin__input">
    <input v-if="theme==='phone'" type="tel" id="tel" placeholder="+7 (___) ___-__-__"class="prin__input">
    <input v-if="theme==='adres'" type="text" id="adres" placeholder="Адрес доставки"class="prin__input">
</div>
</template>

<style lang="scss">
    .prin{
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 16px;
        width: 320px;
        height: 59px;
        background-color: var(--bg-color);
        margin-bottom: 10px;
        &__icon{
            width: 18px;
            height: 18px;
            margin-left: 20px;
            margin-right: 10px;
        }
        &__input{
            border: none;
            outline: none;
        }
    }
    .prin__input::placeholder{
        font-size: 14px;
        font-weight: 400;
        opacity: 50%;
    }
</style>