<script setup lang="ts">
import FabricCards from '@/components/ui/FabricCards.vue'
</script>
<template>
    <div class="right-bottom-block">
        <FabricCards />
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
