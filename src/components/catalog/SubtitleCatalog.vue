<script>
</script>
<template>
<div class="catalogsub">
    <div class="catalogsub__cont">
        <p class="catalogsub__contbigtext">ФИЛЬТРЫ</p>
    </div>
    <p class="catalogsub__greytext">СБРОСИТЬ Х</p>
    <p class="catalogsub__greytext">СОРТИРОВКА:</p>
    <p class="catalogsub__contbigtext">По новизне ></p>



</div>
</template>
<style scoped lang="scss">
    .catalogsub {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 60px;
        padding-bottom: 10px;

        &__cont {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 20px;
            font-weight: 600;

        }
        &__greytext {
            font-size: 10px;
            color: var(--gray-80);
        }
        &__contbigtext {
            font-weight: 500;
        }
    }
</style>