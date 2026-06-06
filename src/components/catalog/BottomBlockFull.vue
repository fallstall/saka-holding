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

@include laptop {
    .bottom-block-full {
        width: min(100% - 32px, 862.5px);
        align-items: center;
        flex-direction: column;
    }
}
</style>
