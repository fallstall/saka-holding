<script setup lang="ts">
import LeftBottomBlock from '@/components/catalog/LeftBottomBlock.vue'
import RightBottomBlock from '@/components/catalog/RightBottomBlock.vue'

</script>

<template>
    <section class="bottom-block-full">
        <LeftBottomBlock />
        <div class="bottom-block-full__column">
            <RightBottomBlock />
            <RightBottomBlock />
        </div>
    </section>
</template>
<style scoped lang="scss">
.bottom-block-full {
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    gap: 90px;

    &__column {
        padding-left: 120px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
}

@include tablet {
    .bottom-block-full {
        width: 100%;
        display: block;

        > :first-child {
            display: none;
        }

        &__column {
            width: 100%;
            padding-left: 0;
            gap: 12px;

            > :nth-child(n + 2) {
                display: none;
            }
        }
    }
}

@include mobile {
    .bottom-block-full {
        &__column {
            gap: 10px;
        }
    }
}
</style>
