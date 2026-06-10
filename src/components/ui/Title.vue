<script setup lang="ts">
defineProps<{
    theme?: 'left' | 'center' | 'right'
    text?: string
}>()
</script>
<template>
        <p class="title" :class="`title--${theme}`">
            {{ text }}
        </p>

</template>
<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;
    .title {
        font-size: 26px;
        letter-spacing: 2%;
        font-weight: 600;

        &--center {
            text-align: center;
        }
        &--left {
            text-align: left;
        }
        &--right {
            text-align: right;
        }
    }

@include tablet {
    .title {
        width: calc(100% - 32px);
        margin-right: auto;
        margin-left: auto;
        font-size: 20px;
    }
}

@include mobile {
    .title {
        width: calc(100% - 24px);
        font-size: 18px;
    }
}
</style>
