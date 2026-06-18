<script setup lang="ts">
import OrderBanner from '@/components/more/OrderBanner.vue';
import Calck from '@/components/more/Calck.vue';
import Input2 from '@/components/more/Input2.vue';
import FabricSlider from '@/components/ui/FabricSlider.vue';
import ProductPage from '../components/more/ProductPage.vue';
import Paletteone from '@/components/ui/palette/paletteone.vue';


</script>

<template>
<main class="more-page">
    <ProductPage />
    <Calck />
    <OrderBanner />
    <Paletteone />
    <Input2 />
    <FabricSlider />
</main>
</template>

<style scoped lang="scss">
.more-page {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
}
</style>
