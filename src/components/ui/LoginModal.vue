<script setup lang="ts">
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
    <div
      v-if="isOpen"
      class="login-overlay"
      @click="emit('close')"
    >
      <div
        class="login-modal"
        @click.stop
      >
        <button
          class="login-modal__close"
          type="button"
          @click="emit('close')"
        >
          ×
        </button>

        <h2 class="login-modal__title">
          Вход
        </h2>

        <form class="login-modal__form" @submit.prevent>
          <label class="login-modal__field">
            <img
              class="login-modal__icon"
              :src="userIcon"
              alt=""
            >

            <input
              class="login-modal__input"
              type="text"
              placeholder="Логин"
            >
          </label>

          <label class="login-modal__field">
            <img
              class="login-modal__icon"
              :src="eyeIcon"
              alt=""
            >

            <input
              class="login-modal__input"
              type="password"
              placeholder="Пароль"
            >
          </label>

          <button
            class="login-modal__button"
            type="submit"
          >
            Войти
          </button>

          <div class="login-modal__links">
            <a class="login-modal__forgot" href="#">
              Забыли пароль?
            </a>

            <a class="login-modal__register" href="#">
              Зарегистрироваться
            </a>
          </div>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.login-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 24px;
  background-color: rgba(54, 67, 78, 0.9);
}

.login-modal {
  position: relative;

  width: 100%;
  max-width: 345px;
  padding: 45px 58px 38px;
  border-radius: 13px;

  background-color: #f8f8f8;
  color: var(--black-color);
}

.login-modal__close {
  position: absolute;
  top: 12px;
  right: 16px;

  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;

  color: #c9cdd1;
  font-size: 38px;
  font-weight: 300;
  line-height: 24px;
}

.login-modal__title {
  margin: 0 0 31px;

  color: var(--black-color);
  font-size: 26px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
}

.login-modal__form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-modal__field {
  position: relative;
  width: 229px;
  height: 56px;
  margin-bottom: 10px;
}

.login-modal__icon {
  position: absolute;
  top: 50%;
  left: 19px;
  transform: translateY(-50%);

  width: 15px;
  height: 15px;
  object-fit: contain;
  pointer-events: none;
  opacity: 0.55;
}

.login-modal__input {
  width: 100%;
  height: 100%;
  padding: 0 18px 0 46px;
  border: none;
  border-radius: 13px;
  outline: none;

  background-color: #ffffff;
  color: var(--black-color);

  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
}

.login-modal__input::placeholder {
  color: #a9aeb4;
}

.login-modal__button {
  width: 229px;
  height: 54px;
  margin-top: 0;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  background-color: var(--gold-color);
  color: var(--black-color);

  font-family: inherit;
  font-size: 16px;
  font-weight: 700;
}

.login-modal__links {
  margin-top: 18px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
}

.login-modal__forgot {
  color: var(--black-color);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 1.3px;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.login-modal__register {
  color: var(--gold-color);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-decoration: none;
}

@media (max-width: 480px) {
  .login-overlay {
    align-items: flex-start;
    padding: 75px 6px 24px;
  }

  .login-modal {
    max-width: 345px;
    padding: 45px 58px 38px;
  }
}

@media (max-width: 360px) {
  .login-modal {
    max-width: 320px;
    padding: 42px 46px 36px;
  }

  .login-modal__field,
  .login-modal__button {
    width: 229px;
  }
}
</style>