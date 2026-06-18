<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import LoginModal from '@/components/ui/LoginModal.vue' 
const isLoginModalOpen = ref(false)

const openLoginModal = () => {
  isLoginModalOpen.value = true
}  

const closeLoginModal = () => {
  isLoginModalOpen.value = false
}
</script>

<template>
    <div class="login" @click="openLoginModal">
        <img class="login__icon" src="./../../assets/images/user.png" alt="">
        <RouterLink class="login__link" to="/">
            Войти
        </RouterLink>

        <!-- Вставлена ваша модалка, всё остальное без изменений -->
        <LoginModal 
            :isOpen="isLoginModalOpen" 
            @close="closeLoginModal"
        />
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
        color: var(--text-light-color);
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        text-decoration: none;
    }
}
  @include tablet {
    .login {
        display: None;
    }
}
</style>