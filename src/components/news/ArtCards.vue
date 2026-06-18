<script setup lang="ts">
import ArtCard from './ArtCard.vue';
import one from '../../assets/images/Artback/art1.png'
import two from '../../assets/images/Artback/art2.png'
import three from '../../assets/images/Artback/art3.png'
import four from '../../assets/images/Artback/art4.png'
import five from '../../assets/images/Artback/art5.png'
import six from '../../assets/images/Artback/art6.png'

</script>

<template>
    <div class="artcards">
        <div class="artcards__row">
            <ArtCard :icon="one"/>
            <ArtCard :icon="two"/>
            <ArtCard :icon="three"/>
        </div>
        <div class="artcards__row">
            <ArtCard :icon="four"/>
            <ArtCard :icon="five"/>
            <ArtCard :icon="six"/>
        </div>
    </div>
</template>

<style lang="scss">
    .artcards{
        display: flex;
        flex-direction: column;
        align-self: center;
        justify-self: center;
        margin-bottom: 50px;
        margin-top: 40px;
        margin-left: 20px;

        &__row{
            display: flex;
            flex-direction: row;
            margin-bottom: 30px;
        }
    }

@include tablet {
    .artcards {
        width: calc(100% - 48px);
        margin: 20px auto 54px;

        &__row {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
            margin-bottom: 0;

            &:first-child > :nth-child(3) {
                display: none;
            }

            &:not(:first-child) {
                display: none;
            }
        }
    }
}

@include mobile {
    .artcards {
        width: calc(100% - 40px);
        margin-top: 16px;

        &__row {
            grid-template-columns: 1fr;
            gap: 14px;
        }
    }
}
</style>
