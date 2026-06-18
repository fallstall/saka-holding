<script setup lang="ts">
import { ref } from 'vue'

// ui
import Logo from '@/components/ui/Logo.vue'
import Phone from '@/components/ui/Phone.vue'
import Button from '@/components/ui/Button.vue'

// header
import Emblem from '@/components/header/Emblem.vue'
import Login from '@/components/header/Login.vue'
import NavBar from '@/components/header/NavBar.vue'
import Themebtn from '@/components/header/Themebtn.vue'
import BurgerMenu from '@/components/header/BurgerMenu.vue'

// images
import arrowIcon from '@/assets/images/cart.png'
import cartImg from '@/assets/images/cartimg.png'

const isCartOpen = ref(false)
</script>

<template>
  <header class="header">
    <div class="header__top">
      <Logo />

      <Emblem />

      <p class="header__text">
        Производитель турецкого<br>
        трикотажного полотна
      </p>

      <div class="header__actions">
        <div class="header__cart">
          <Button
            theme="icon"
            :icon="arrowIcon"
            class="header__cart-button"
            @click="isCartOpen = true"
          />

          <span class="header__cart-count">3</span>
        </div>

        <Login />
        <Phone />
        <Themebtn class="header__theme" />
        <BurgerMenu />
      </div>
    </div>

    <NavBar />
  </header>

  <div
    v-if="isCartOpen"
    class="cart-modal"
    @click.self="isCartOpen = false"
  >
    <div class="cart-modal__window">
      <button
        class="cart-modal__close"
        type="button"
        @click="isCartOpen = false"
      >
        ×
      </button>

      <h2 class="cart-modal__title">
        Корзина
      </h2>

      <div class="cart-modal__list">
        <div class="cart-modal__item">
          <img class="cart-modal__img" :src="cartImg" alt="">

          <div class="cart-modal__info">
            <p class="cart-modal__name">
              Футер 2-х нитка диагональ
            </p>

            <div class="cart-modal__count">
              <button type="button">+</button>
              <span>3</span>
              <button type="button">−</button>
            </div>
          </div>

          <p class="cart-modal__price">
            450₽
          </p>

          <button class="cart-modal__delete" type="button">
            ×
          </button>
        </div>

        <div class="cart-modal__item">
          <img class="cart-modal__img" :src="cartImg" alt="">

          <div class="cart-modal__info">
            <p class="cart-modal__name">
              Футер 2-х нитка диагональ
            </p>

            <div class="cart-modal__count">
              <button type="button">+</button>
              <span>16</span>
              <button type="button">−</button>
            </div>
          </div>

          <p class="cart-modal__price">
            4650₽
          </p>

          <button class="cart-modal__delete" type="button">
            ×
          </button>
        </div>

        <div class="cart-modal__item">
          <img class="cart-modal__img" :src="cartImg" alt="">

          <div class="cart-modal__info">
            <p class="cart-modal__name">
              Футер 2-х нитка диагональ
            </p>

            <div class="cart-modal__count">
              <button type="button">+</button>
              <span>1</span>
              <button type="button">−</button>
            </div>
          </div>

          <p class="cart-modal__price">
            305 005₽
          </p>

          <button class="cart-modal__delete" type="button">
            ×
          </button>
        </div>
      </div>

      <form class="cart-modal__form">
        <input type="email" placeholder="E-Mail">
        <input type="tel" placeholder="+7 (___) ___-__-__">

        <button class="cart-modal__order" type="button">
          <span>Оформить заказ</span>

          <img
            class="cart-modal__order-icon"
            :src="arrowIcon"
            alt=""
          >
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/mixins.scss' as *;

.header {
  max-width: 100vw;
  min-height: 178px;
  margin: 0 auto;
  background-color: var(--black-color);

  &__top {
    height: 118px;
    display: flex;
    align-items: center;
    padding: 0 131px 0 132px;
    background-color: var(--black-color);
  }

  &__text {
    margin: 0 0 0 30px;
    color: var(--on-dark-68-color);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.28;
    letter-spacing: 0.6px;
    text-align: left;
    white-space: nowrap;
  }

  &__actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 32px;
    padding-left: 90px;
  }

  &__cart {
    position: relative;
    width: 43px;
    height: 43px;
    flex: 0 0 43px;
  }

  &__cart-button {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background-color: var(--black-80-color);

    :deep(.btn__icon) {
      width: 24px;
      height: 24px;
    }
  }

  &__cart-count {
    position: absolute;
    top: -4px;
    right: -5px;
    width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--gold-color);
    color: var(--text-light-color);
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
  }

  &__language {
    width: 53px;
    height: 12px;
    object-fit: contain;
    margin-left: 20px;
  }
}

.cart-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(28, 40, 52, 0.78);

  &__window {
    position: relative;
    width: 100%;
    max-width: 740px;
    padding: 42px 36px 56px;
    border-radius: 18px;
    background-color: #f7f7f7;
    color: var(--black-color);
  }

  &__close {
    position: absolute;
    top: 16px;
    right: 22px;
    border: none;
    background: none;
    cursor: pointer;
    color: #cfd3d7;
    font-size: 42px;
    line-height: 1;
  }

  &__title {
    margin: 0 0 24px;
    font-size: 30px;
    font-weight: 700;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;
  }

  &__item {
    min-height: 86px;
    padding: 12px 20px 12px 12px;
    border-radius: 18px;
    background-color: #eeeeee;

    display: grid;
    grid-template-columns: 76px 1fr auto 28px;
    align-items: center;
    gap: 24px;
  }

  &__img {
    width: 76px;
    height: 76px;
    border-radius: 16px;
    object-fit: cover;
  }

  &__name {
    margin: 0 0 10px;
    font-size: 17px;
    font-weight: 600;
  }

  &__count {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      width: 18px;
      height: 18px;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      background-color: #ffffff;
      color: var(--black-color);
      font-size: 14px;
      line-height: 1;
    }

    span {
      color: #9ca3aa;
      font-size: 14px;
    }
  }

  &__price {
    margin: 0;
    font-size: 21px;
    font-weight: 700;
    white-space: nowrap;
  }

  &__delete {
    border: none;
    background: none;
    cursor: pointer;
    color: #cfd3d7;
    font-size: 32px;
    line-height: 1;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;

    input {
      width: 100%;
      height: 62px;
      padding: 0 28px;
      border: none;
      border-radius: 18px;
      outline: none;
      background-color: #ffffff;
      color: var(--black-color);
      font-family: inherit;
      font-size: 16px;

      &::placeholder {
        color: #b5bac0;
      }
    }
  }

  &__order {
    width: 100%;
    height: 66px;
    padding: 0 34px;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    background-color: var(--gold-color);
    color: var(--black-color);
    font-family: inherit;
    font-size: 18px;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__order-icon {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
}

@include tablet {
  .header {
    width: 100%;
    min-height: 118px;
    overflow: visible;

    &__top {
      width: 100%;
      height: 118px;
      padding: 0 20px;
    }

    &__text {
      display: none;
    }

    &__actions {
      flex: 0 0 auto;
      padding-left: 24px;
      gap: 20px;
    }

    &__theme {
      display: none;
    }

    &__language {
      display: none;
    }

    &__cart-count {
      display: none;
    }

    &__cart-button {
      display: none;
    }

    :deep(.logo) {
      padding-right: 0;
    }

    :deep(.logo img) {
      width: 82px;
    }

    :deep(.emblems) {
      gap: 8px;
      margin-left: 16px;
    }

    :deep(.emblems img) {
      width: 34px;
      height: 34px;
    }
  }

  .cart-modal {
    &__window {
      max-width: 620px;
      padding: 36px 24px 42px;
    }

    &__item {
      grid-template-columns: 70px 1fr auto 24px;
      gap: 16px;
    }

    &__img {
      width: 70px;
      height: 70px;
    }
  }
}

@include mobile {
  .header {
    width: 320px;
    max-width: 100%;
    min-height: 92px;

    &__top {
      width: 100%;
      height: 92px;
      padding: 0 12px;
    }

    &__actions {
      margin-left: auto;
      padding-left: 0;
      gap: 0;
    }

    :deep(.logo img) {
      width: 58px;
    }

    :deep(.emblems) {
      gap: 5px;
      margin-left: 8px;
    }

    :deep(.emblems img) {
      width: 25px;
      height: 25px;
    }
  }

  .cart-modal {
    padding: 12px;

    &__window {
      padding: 32px 16px 28px;
    }

    &__title {
      font-size: 24px;
    }

    &__item {
      grid-template-columns: 58px 1fr;
      gap: 12px;
    }

    &__img {
      width: 58px;
      height: 58px;
    }

    &__price {
      grid-column: 2;
      font-size: 18px;
    }

    &__delete {
      position: absolute;
      right: 28px;
    }

    &__order {
      height: 58px;
      font-size: 15px;
    }
  }
}
@include mobile {
  .cart-modal {
    padding: 0 6px;
    align-items: flex-start;
    padding-top: 100px;
    background-color: rgba(28, 40, 52, 0.82);

    &__window {
      width: 100%;
      max-width: 320px;
      padding: 30px 26px 48px;
      border-radius: 12px;
    }

    &__close {
      top: 14px;
      right: 16px;
      font-size: 34px;
    }

    &__title {
      margin-bottom: 26px;
      font-size: 26px;
      line-height: 1;
    }

    &__list {
      gap: 10px;
      margin-bottom: 14px;
    }

    &__item {
      min-height: 70px;
      padding: 10px 14px;
      border-radius: 12px;

      display: grid;
      grid-template-columns: 1fr auto 20px;
      align-items: center;
      column-gap: 10px;
    }

    &__img {
      display: none;
    }

    &__info {
      min-width: 0;
    }

    &__name {
      margin: 0 0 8px;
      font-size: 12px;
      font-weight: 500;
      white-space: nowrap;
    }

    &__count {
      gap: 7px;

      button {
        width: 14px;
        height: 14px;
        font-size: 10px;
      }

      span {
        font-size: 12px;
      }
    }

    &__price {
      margin: 0;
      font-size: 15px;
      font-weight: 800;
      white-space: nowrap;
    }

    &__delete {
      font-size: 24px;
    }

    &__form {
      gap: 10px;

      input {
        height: 50px;
        padding: 0 18px;
        border-radius: 12px;
        font-size: 13px;
      }
    }

    &__order {
      height: 50px;
      padding: 0 24px;
      border-radius: 100px;

      font-size: 15px;
      font-weight: 700;
    }

    &__order-icon {
      width: 20px;
      height: 20px;
    }
  }
}
</style>