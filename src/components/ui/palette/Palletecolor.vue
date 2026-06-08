<script setup lang="ts">

defineProps<{
  img1?: string
  name1?: string
  img2?: string
  name2?: string
  img3?: string
  name3?: string
}>()
</script>

<template>
    <div class="color">
        <div class="color__el">
            <img class="color__img" :src="img1" alt=""> 
            <p class="color__name">{{name1 }}</p>
        </div>
        <div class="color__el">
            <img class="color__img" :src="img2" alt=""> 
            <p class="color__name">{{ name2 }}</p>
        </div>
        <div class="color__el">
            <img class="color__img" :src="img3" alt=""> 
            <p class="color__name">{{ name3 }}</p>
        </div>
    </div>
</template>

<style lang="scss" >
    .color{
        display: flex;
        flex-direction: row;

        &__el{
            display: flex;
            flex-direction: column;
        }

        &__img{
            width: 130px;
            height: 130px;
            margin-right: 70px;
        }

        &__name{
            font-size: 14px;
            font-weight: 600;
        }
    }
</style>