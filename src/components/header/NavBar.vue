<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navItems = [
    {
        title: 'Главная',
        path: '/',
    },
    {
        title: 'Каталог',
        path: '/catalog',
        hasArrow: true,
    },
    {
        title: 'О компании',
        path: '/about',
    },
    {
        title: 'Новости',
        path: '/news',
    },
    {
        title: 'Доставка и оплата',
        path: '/delivery',
    },
    {
        title: 'Контакты',
        path: '/contacts',
    },
]
</script>

<template>
    <nav class="nav">
        <div class="nav__inner">
        <RouterLink
            v-for="item in navItems"
            :key="item.path"
            class="nav__link"
            :to="item.path"
        >
            <span class="nav__text">
            {{ item.title }}
            </span>

            <span
            v-if="item.hasArrow"
            class="nav__arrow"
            />
        </RouterLink>
        </div>
    </nav>
</template>

<style scoped lang="scss">
    .nav {
    width: 100%;
    height: 60px;
    background-color: var(--black-80-color);

    &__inner {
        min-height: 60px;
        padding: 0 124px;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 48px;
    }

    &__link {
        position: relative;

        min-height: 60px;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 12px;

        flex: 0 0 auto;

        color: var(--text-light-color);
        text-decoration: none;
        font-size: 14px;
        font-weight: 400;
        line-height: 1;
        letter-spacing: 3px;

        transition: color 0.2s ease;

        &::after {
        content: '';

        position: absolute;
        left: 0;
        bottom: 0;

        width: 100%;
        height: 4px;

        background-color: var(--gold-color);

        opacity: 0;
        transition: opacity 0.2s ease;
        }

        &:hover {
        color: var(--gold-color);
        }

        &.router-link-exact-active {
        color: var(--text-light-color);

        &::after {
            opacity: 1;
        }
        }
    }

    &__text {
        white-space: nowrap;
    }

    &__arrow {
        width: 10px;
        height: 10px;

        border-right: 2px solid currentColor;
        border-bottom: 2px solid currentColor;

        transform: rotate(45deg) translateY(-3px);
    }
    }
    @include laptop {
        .nav {
            display: none;

        }
}
</style>
