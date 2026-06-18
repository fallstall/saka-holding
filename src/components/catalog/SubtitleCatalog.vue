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

@include tablet {
    .catalogsub {
        width: 100%;
        justify-content: space-between;
        gap: 12px;
        padding-bottom: 16px;

        &__cont {
            order: 3;
            margin-left: auto;
        }

        &__contbigtext,
        &__greytext {
            margin: 0;
            font-size: 10px;
            white-space: nowrap;
        }

        &__greytext:first-of-type {
            display: none;
        }
    }
}

@include mobile {
    .catalogsub {
        gap: 8px;

        &__contbigtext,
        &__greytext {
            font-size: 8px;
        }
    }
}
</style>
