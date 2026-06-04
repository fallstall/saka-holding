<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
    <div class="login">
        <img class="login__icon" src="./../../assets/images/user.png" alt="">
        <RouterLink class="login__link" to="/">
            Войти
        </RouterLink>
    </div>
</template>

<style scoped lang="scss">
.login {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 0 0 auto;

    &__icon {
        width: 18px;
        height: 18px;
        object-fit: contain;
    }

    &__link {
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        text-decoration: none;
    }
}
</style>
