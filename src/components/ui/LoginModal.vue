<script setup lang="ts">
import Title from '@/components/ui/Title.vue'
import Input from '@/components/ui/Input.vue'
import Button from '@/components/ui/Button.vue'

import userIcon from '@/assets/images/Users.png'
import eyeIcon from '@/assets/images/Eye.png'

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="emit('close')">
      <div class="modal-window" @click.stop>
        
        <button class="login-modal__close" @click="emit('close')">×</button>

        <div class="login-modal">
          <Title 
            class="login-modal__title"
            tag="h2"
            theme="center"
            text="Вход"
          />
          <form class="login-modal__form" @submit.prevent>
            <div class="login-modal__field">
              <img :src="userIcon" alt="Логин" class="login-modal__icon" />
              <Input placeholder="Логин" class="login-modal__input" />
            </div>
            <div class="login-modal__field">
              <img :src="eyeIcon" alt="Пароль" class="login-modal__icon" />
              <Input placeholder="Пароль" type="password" class="login-modal__input" />
            </div>
            <Button 
              class="login-modal__button"
              theme="text"
              text="Войти"
            />
            <div class="login-modal__links">
              <a href="#" class="login-modal__link">Забыли пароль?</a>
              <a href="#" class="login-modal__link login-modal__link--register">Зарегистрироваться</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-window {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  max-width: 450px;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}
.login-modal {
  &__close {
    position: absolute;
    top: 12px;
    right: 16px;
    background: none;
    border: none;
    font-size: 28px;
    color: #ccc;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
  }

  &__title {
    color: #1a1f29;
    margin-bottom: 20px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__field {
    position: relative;
    width: 100%;
  }

  &__icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    object-fit: contain;
    pointer-events: none;
  }

  &__input {
    width: 100%;
    border-radius: 12px;
    height: 48px;
    border: 1px solid transparent;
    box-sizing: border-box;

  }

  &__button {
    width: 100%;
    height: 56px;
    margin-top: 8px;
    border-radius: 28px;
    display: flex;           
    justify-content: center; 
    align-items: center; 
  }

  &__links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
  }

  &__link {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    text-decoration: none;
    color: #1a1f29;
    border-bottom: 1px solid #1a1f29;
    padding-bottom: 2px;
    &--register {
      color: var(--gold-color);
      border-bottom-color: var(--gold-color);
    }
  }
}
</style>