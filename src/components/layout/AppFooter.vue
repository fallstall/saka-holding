<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import Logo from '@/components/ui/Logo.vue'

const navigationLinks = [
    'Каталог',
    'О компании',
    'Новости',
    'Доставка и оплата',
    'Контакты',
    'Корзина',
]

const informationLinks = [
    'Помощь',
    'Блог',
    'Вопрос-ответ',
    'Политика конфиденциальности',
    'Карта сайта',
]
</script>

<template>
    <footer class="footer">
        <div class="footer__inner">
            <div class="footer__top">
                <div class="footer__brand">
                    <Logo />
                </div>

                <nav class="footer__column" aria-label="Навигация">
                    <h2 class="footer__heading">Навигация</h2>
                    <a
                        v-for="link in navigationLinks"
                        :key="link"
                        class="footer__link"
                        href="#"
                    >
                        {{ link }}
                    </a>
                </nav>

                <nav class="footer__column" aria-label="Информация">
                    <h2 class="footer__heading">Информация</h2>
                    <a
                        v-for="link in informationLinks"
                        :key="link"
                        class="footer__link"
                        href="#"
                    >
                        {{ link }}
                    </a>
                </nav>

                <div class="footer__contacts">
                    <h2 class="footer__heading">Следите за новостями</h2>

                    <form class="footer__subscribe" @submit.prevent>
                        <label class="footer__email-label" for="footer-email">
                            Ваш E-mail
                        </label>
                        <input
                            id="footer-email"
                            class="footer__email"
                            type="email"
                            autocomplete="email"
                            aria-label="Ваш E-mail"
                        >
                        <Button
                            class="footer__submit"
                            theme="text"
                            text="Отправить"
                        />
                    </form>

                    <a class="footer__phone" href="tel:+902125470826">
                        <span aria-hidden="true"></span><img src="./../../assets/images/PhoneCall.png" alt="">
                        +90 212 547 08 26
                    </a>
                </div>
            </div>

            <div class="footer__bottom">
                <div class="footer__social">
                    <p class="footer__social-text">
                        Напишите нам,<br>
                        мы онлайн:
                    </p>
                    <div class="footer__social-links">
                        <a class="footer__social-link footer__social-link--vk" href="#" aria-label="ВКонтакте">VK</a>
                        <a class="footer__social-link footer__social-link--wa" href="#" aria-label="WhatsApp">W</a>
                        <a class="footer__social-link footer__social-link--tg" href="#" aria-label="Telegram">T</a>
                        <a class="footer__social-link footer__social-link--ig" href="#" aria-label="Instagram">◎</a>
                    </div>
                </div>

                <p class="footer__copyright">
                    Copyright © 2023 Сака Текстиль. Все права защищены.
                </p>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
.footer {
    width: 100%;
    min-height: 412px;
    border-top: 1px solid rgba(255, 255, 255, 0.45);
    background-color: var(--black-color);
    color: #fff;

    &__inner {
        width: min(1160px, calc(100vw - 48px));
        min-height: 411px;
        margin: 0 auto;
        padding: 48px 0 38px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &__top {
        display: grid;
        grid-template-columns: 126px 134px 225px minmax(360px, 1fr);
        gap: 66px;
        align-items: start;
    }

    &__brand {
        padding-top: 2px;

        :deep(.logo img) {
            width: 96px;
        }
    }

    &__column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    &__heading {
        margin: 0 0 12px;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        line-height: 151%;
    }

    &__link {
        color: rgba(255, 255, 255, 0.76);
        font-size: 13px;
        font-weight: 400;
        line-height: 1.25;
        text-decoration: none;
        transition: color 0.2s ease;

        &:hover {
            color: var(--gold-color);
        }
    }

    &__contacts {
        min-width: 0;
    }

    &__subscribe {
        position: relative;
        height: 59px;
        margin-top: 16px;
        display: flex;
        align-items: center;
    }

    &__email-label {
        position: absolute;
        left: 30px;
        z-index: 1;
        color: rgba(255, 255, 255, 0.7);
        font-size: 12px;
        pointer-events: none;
    }

    &__email {
        width: 100%;

        height: 49px;
        padding: 0 185px 0 35px;
        border: 0;
        border-radius: 25px;
        outline: 0;
        background-color: var(--black-80-color);
        color: #fff;
        font: inherit;

        &:focus + .footer__submit,
        &:not(:placeholder-shown) + .footer__submit {
            position: relative;
        }
    }

    &__submit {
        position: absolute;
        right: 10px;
        width: 380px;
        max-width: none;
        height: 49px;
        border-radius: 25px;

        :deep(.btn__text) {
            font-size: 14px;
            font-weight: 700;
        }
    }

    &__phone {
        margin-top: 81px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 8px;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        text-decoration: none;

        span {
            color: var(--gold-color);
            font-size: 18px;
        }
    }

    &__bottom {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    &__social {
        display: flex;
        align-items: center;
        gap: 35px;
    }

    &__social-text {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        line-height: 1.45;
    }

    &__social-links {
        display: flex;
        align-items: center;
        gap: 17px;
    }

    &__social-link {
        width: 28px;
        height: 28px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        color: #fff;
        font-size: 11px;
        font-weight: 700;
        text-decoration: none;
        transition: transform 0.2s ease;

        &:hover {
            transform: translateY(-2px);
        }

        &--vk {
            background-color: #4c75a3;
        }

        &--wa {
            background-color: #20c968;
        }

        &--tg {
            background-color: #2ca5e0;
        }

        &--ig {
            background-color: #fff;
            color: var(--black-color);
            font-size: 20px;
        }
    }

    &__copyright {
        margin: 0 0 9px;
        color: rgba(255, 255, 255, 0.34);
        font-size: 13px;
        font-weight: 400;
    }
}

@include laptop {
    .footer {
        &__inner {
            width: min(100% - 48px, 960px);
        }

        &__top {
            grid-template-columns: 100px 130px 210px minmax(300px, 1fr);
            gap: 30px;
        }
    }
}

@include tablet {
    .footer {
        &__inner {
            min-height: auto;
            padding: 42px 0 32px;
        }

        &__top {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 42px 32px;
        }

        &__contacts {
            grid-column: 1 / -1;
        }

        &__phone {
            margin-top: 28px;
            justify-content: flex-start;
        }

        &__bottom {
            margin-top: 48px;
            align-items: flex-start;
            flex-direction: column;
            gap: 30px;
        }
    }
}

@include mobile {
    .footer {
        &__inner {
            width: min(100% - 32px, 420px);
        }

        &__top {
            grid-template-columns: 1fr;
            gap: 36px;
        }

        &__contacts {
            grid-column: auto;
        }

        &__subscribe {
            height: auto;
            align-items: stretch;
            flex-direction: column;
            gap: 12px;
        }

        &__email-label {
            top: 17px;
        }

        &__email {
            padding-right: 35px;
        }

        &__submit {
            position: static;
            width: 100%;
        }

        &__social {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
        }

        &__copyright {
            line-height: 1.5;
        }
    }
}
</style>
