<script setup lang="ts">
// ui
import Logo from '@/components/ui/Logo.vue';
import Phone from '@/components/ui/Phone.vue';
import Button from '@/components/ui/Button.vue';
// header
import Emblem from '@/components/header/Emblem.vue';
import Login from '@/components/header/Login.vue';
import NavBar from '@/components/header/NavBar.vue';
// images
import arrowIcon from '@/assets/images/cart.png';
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
          <Button theme="icon" :icon="arrowIcon" class="header__cart-button"/>
          <span class="header__cart-count">3</span>
        </div>
        <Login />
        <Phone />
        <img class="header__language" src="./../../assets/images/language.png" alt="RU / EN">
      </div>
    </div>
    <NavBar />

  </header>
</template>

<style scoped lang="scss">
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
    color: rgba(255, 255, 255, 0.68);
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
    color: #fff;
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

  @include laptop {
    .header {
      
      

        &__top {
            height: 120px;
        }

        &__text {
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
    }
}

</style>
