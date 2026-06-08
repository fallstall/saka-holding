<script setup lang="ts">
defineProps<{
    subtitle?:string
}>()
</script>

<template>
    <span class="subtitle">{{ subtitle }}</span>
    <span class="subtitle__strelka"> > </span>
</template>

<style lang="scss">
    .subtitle{
        font-weight: 400;
        opacity: 25%;
        font-size: 12px;
        padding-right: 10px;

        &__strelka{
            font-weight: 400;
            opacity: 25%;
            font-size: 12px;
        }
    }
</style>