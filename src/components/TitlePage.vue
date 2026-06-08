<script setup lang="ts">
defineProps<{
    title?:string
}>()
</script>

<template>
<span class="title">{{ title }}</span>
</template>

<style lang="scss">
    .title{
    font-weight: 400;
    font-size: 12px;
    padding-left: 10px;
    }
</style>