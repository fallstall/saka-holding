<script setup lang="ts">
import { ref, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

const setTheme = (newTheme: Theme) => {
  theme.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}

const toggleTheme = () => {
  if (theme.value === 'light') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') as Theme | null

  if (savedTheme === 'dark' || savedTheme === 'light') {
    setTheme(savedTheme)
  }
})
</script>

<template>
  <button class="theme-toggle" type="button" @click="toggleTheme">
    {{ theme === 'light' ? 'Тёмная тема' : 'Светлая тема' }}
  </button>
</template>

<style scoped lang="scss">
.theme-toggle {
  padding: 12px 20px;
  border: none;
  border-radius: 100px;
  cursor: pointer;

  background-color: var(--bg-color);
  color: var(--text-dark-color);

  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
}
</style>
