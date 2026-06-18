<script setup lang="ts">
import FabricSlider from '@/components/ui/FabricSlider.vue'
</script>
<template>
    <div class="right-bottom-block">
        <FabricSlider cards-only catalog-grid />
    </div>
</template>
<style scoped lang="scss">
.right-bottom-block {
    width: 862.5px;
    min-width: 0;
}

@include tablet {
    .right-bottom-block {
        width: 100%;
    }
}
</style>
