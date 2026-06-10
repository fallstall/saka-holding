<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Input from '@/components/ui/Input.vue';
import arrowIcon from '@/assets/images/ArrowRight.png'
import Title from '@/components/ui/Title.vue';
</script>

<template>
  <div class="feedback-form">
    <div class="feedback-form__content">
        <Title 
          text="Фабрика «Saka Tekstil» осуществляет прокрас текстиля на заказ на самых выгодных условиях" 
          theme="center" 
          class="feedback-form__title"
        />
        <p class="feedback-form__subtitle">
          Просто оставьте заявку на сайте и мы свяжемся с вами в ближайшее время
        </p>
      <div class="feedback-form__form">
          <Input placeholder="Ваше имя" />
          <Input placeholder="+7 (___) ___-__-__" type="tel" />
          <Input placeholder="Ваш E-mail" type="email" />
        <Button
            class="feedback-form__button"
            theme="full"
            text="Отправить"
            :icon="arrowIcon"
        />
      </div>
      <p class="feedback-form__agreement">
        Нажимая на кнопку вы даете свое согласие на обработку персональных данных. Гарантируем! Спама не будет!
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.feedback-form {
  width: 1160px;
  height: 330px;
  background-color: var(--black-color);
  border-radius: 16px;
  padding: 0 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 60px;
  
  &__content {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  &__title {
    color:var(--bg-color);
    margin-bottom: 8px;
    max-width: 800px;
  }

  &__subtitle {
    color: var(--bg-color);
    font-size: 18px;
    text-align: center;
    margin-bottom: 24px;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
    flex-wrap: nowrap;
  }

  &__button {
    flex-shrink: 0;
    width: 280px;
    height: 58px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    
    :deep(.btn__text) {
        font-size: 16px;
  }
}

  &__agreement {
    margin-top: 12px;
    font-size: 12px;
    color:var(--on-dark-70-color);
    text-align: center;
    opacity: 0.8;
  }
}

@include tablet {
  .feedback-form {
    width: calc(100% - 32px);
    height: auto;
    min-height: 0;
    margin-bottom: 40px;
    padding: 36px 24px;

    &__title {
      margin-top: 0;
      font-size: 20px;
    }

    &__subtitle {
      font-size: 14px;
    }

    &__form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;

      :deep(input) {
        width: 100%;
      }
    }

    &__button {
      width: 100%;
      max-width: none;
    }
  }
}

@include mobile {
  .feedback-form {
    width: calc(100% - 24px);
    padding: 30px 16px;

    &__title {
      font-size: 18px;
    }

    &__form {
      grid-template-columns: 1fr;
    }

    &__agreement {
      font-size: 10px;
    }
  }
}
</style>
