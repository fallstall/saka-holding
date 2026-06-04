<script setup lang="ts">

defineProps<{
    text: string
    theme: 'full' | 'icon' | 'only-text'
    transform: string
}>()

</script>

<template>
    <button class="'btn-${{theme}}'">
        <span v-if="theme !== 'icon'">{{ text }}</span>
        <img v-if="theme === 'icon' || theme === 'full'" src="" alt="">
    </button>
</template>

<style scoped lang="scss">
.btn {


    
    &-full {

    }
    &-icon {

    }
    &-only-text {

    }

}
</style>