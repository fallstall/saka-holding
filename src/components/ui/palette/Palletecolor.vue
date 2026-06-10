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
@include tablet {
    .color {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;

        &__img {
            width: 88px;
            max-width: 100%;
            height: auto;
            aspect-ratio: 1 / 1;
            margin-right: 0;
        }

        &__el {
            min-width: 0;
            align-items: center;
        }

        &__name {
            width: 100%;
            margin: 8px 0 0;
            font-size: 10px;
            text-align: center;
        }
    }
}

@include mobile{
    .color {
        display: contents;

        &__el {
            min-width: 0;
            align-items: center;
        }

        &__img {
            width: 72px;
            max-width: 100%;
        }

        &__name {
            width: 100%;
            margin: 7px 0 0;
            font-size: 9px;
            line-height: 1.25;
            text-align: center;
        }
    }
}
</style>
