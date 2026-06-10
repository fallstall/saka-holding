<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const navItems = [
    { title: 'Главная', path: '/' },
    { title: 'Каталог', path: '/catalog' },
    { title: 'О компании', path: '/about' },
    { title: 'Новости', path: '/news' },
    { title: 'Доставка и оплата', path: '/delivery' },
    { title: 'Контакты', path: '/contacts' },
]

const route = useRoute()
const menu = ref<HTMLElement | null>(null)
const isOpen = ref(false)

function closeMenu() {
    isOpen.value = false
}

function handleDocumentClick(event: MouseEvent) {
    if (menu.value && !menu.value.contains(event.target as Node)) {
        closeMenu()
    }
}

function handleEscape(event: KeyboardEvent) {
    if (event.key === 'Escape') {
        closeMenu()
    }
}

watch(() => route.fullPath, closeMenu)

onMounted(() => {
    document.addEventListener('click', handleDocumentClick)
    document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleDocumentClick)
    document.removeEventListener('keydown', handleEscape)
})
</script>

<template>
    <div ref="menu" class="burger-menu">
        <button
            class="burger-menu__button"
            :class="{ 'burger-menu__button--open': isOpen }"
            type="button"
            aria-label="Открыть меню"
            :aria-expanded="isOpen"
            aria-controls="mobile-navigation"
            @click="isOpen = !isOpen"
        >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <nav
            v-show="isOpen"
            id="mobile-navigation"
            class="burger-menu__panel"
            aria-label="Мобильная навигация"
        >
            <RouterLink
                v-for="item in navItems"
                :key="item.path"
                class="burger-menu__link"
                :to="item.path"
            >
                {{ item.title }}
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped lang="scss">
.burger-menu {
    position: relative;
    z-index: 20;
    display: none;

    &__button {
        position: relative;
        width: 48px;
        height: 48px;
        padding: 0;
        border: 0;
        border-radius: 50%;
        background-color: var(--black-80-color);
        cursor: pointer;

        span {
            position: absolute;
            left: 13px;
            width: 22px;
            height: 2px;
            border-radius: 2px;
            background-color: var(--text-light-color);
            transition:
                top 0.2s ease,
                transform 0.2s ease,
                opacity 0.2s ease;

            &:nth-child(1) {
                top: 16px;
            }

            &:nth-child(2) {
                top: 23px;
            }

            &:nth-child(3) {
                top: 30px;
            }
        }

        &--open {
            span:nth-child(1) {
                top: 23px;
                transform: rotate(45deg);
            }

            span:nth-child(2) {
                opacity: 0;
            }

            span:nth-child(3) {
                top: 23px;
                transform: rotate(-45deg);
            }
        }

        &:focus-visible {
            outline: 2px solid var(--gold-color);
            outline-offset: 3px;
        }
    }

    &__panel {
        position: absolute;
        top: 60px;
        right: 0;
        width: 300px;
        padding: 10px;
        border-radius: 8px;
        background-color: var(--black-80-color);
        box-shadow: 0 14px 34px var(--on-dark-16-color);
    }

    &__link {
        min-height: 48px;
        padding: 0 16px;
        display: flex;
        align-items: center;
        border-radius: 6px;
        color: var(--text-light-color);
        font-size: 15px;
        text-decoration: none;
        transition:
            color 0.2s ease,
            background-color 0.2s ease;

        &:hover,
        &.router-link-exact-active {
            background-color: var(--black-color);
            color: var(--gold-color);
        }
    }
}

@include tablet {
    .burger-menu {
        display: block;
    }
}

@include mobile {
    .burger-menu {
        &__button {
            width: 42px;
            height: 42px;

            span {
                left: 11px;
                width: 20px;

                &:nth-child(1) {
                    top: 14px;
                }

                &:nth-child(2) {
                    top: 20px;
                }

                &:nth-child(3) {
                    top: 26px;
                }
            }

            &--open {
                span:nth-child(1),
                span:nth-child(3) {
                    top: 20px;
                }
            }
        }

        &__panel {
            position: fixed;
            top: 92px;
            right: 16px;
            width: min(300px, calc(100vw - 32px));
        }
    }
}
</style>
