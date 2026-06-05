<!-- src/components/home/CardCloth.vue -->
<script setup lang="ts">
import Button from '@/components/ui/Button.vue'

defineProps<{
    image?: string      // картинка ткани
    theme?: 'max' | 'avg' | 'min'
    transform?: string
    icon?: string
    buttonText?: string
}>()

</script>

<template>
    <div class="cardCloth" :class="`cardCloth--${theme}`">
        <img
            v-if="theme === 'max'"
            class="cardCloth__image"
            :src="image"
            alt="Cloth"
        >
       
        <img
            v-if="theme === 'avg'"
            class="cardCloth__image"
            :src="image"
            alt="Cloth"
        >
        <img
            v-if="theme === 'min'"
            class="cardCloth__image"
            :src="image"
            alt="Cloth"
        >
        <Button
            v-if="buttonText"
            class="cardCloth__button"
            theme="text"
            :text="buttonText"
        />
    
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as *;

.cardCloth {
    box-sizing: border-box;
    position: relative;
    border: none;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 

    
    &--max {
        width: 460px;
        padding: 10px;
    }
    
    &--avg {
        width: 360px;
        padding: 10px;
    }
    
    &--min {
        width: 260px;
        padding: 10px;
    }
    
    &__image {
        width: 100%;
        height: 210px;           // общая высота 210px 
        object-fit: cover;
        display: block;
        border-radius: var(--border-radius-xs);
    }

    &__button {
        position: absolute;
        left: 30px;
        bottom: 28px;
    }
}

@include laptop {
    .cardCloth {
        width: 100%;
        max-width: 460px;
    }
}
</style>
