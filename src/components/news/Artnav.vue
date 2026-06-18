<script setup lang="ts">

</script>

<template>
    <div class="artnav">
        <div class="artnav__cont">
            <span class="artnav__text">Ткани</span>
        </div>
        <div class="artnav__cont">
            <span class="artnav__text">Уход</span>
        </div>
        <div class="artnav__cont">
            <span class="artnav__text">Стирка</span>
        </div>
        <div class="artnav__cont">
            <span class="artnav__text">Выбор материала</span>
        </div>
        <div class="artnav__cont">
            <span class="artnav__text">Выбор цвета</span>
        </div>
        <div class="artnav__cont">
            <span class="artnav__text">Ткани</span>
        </div>
    </div>
</template>

<style lang="scss">
    .artnav{
        display: flex;
        flex-direction: row;
        justify-self: center;
        margin-left: 20px;
        
        margin-top: 40px;
        &__cont{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 16px;
            background-color: var(--gray);
            width: auto;
            height: 43px;
            margin-right: 35px;
            transition: all 0.3s;

        }

        &__cont:hover{
            background-color: var(--black-color);
        }
         &__cont:hover span {
            color: var(--gray);
         }
        &__text{
            font-size: 14px;
            font-weight: 400;
            padding-left: 50px;
            padding-right: 50px;
        }
    }

@include tablet {
    .artnav {
        width: calc(100% - 48px);
        margin: 24px auto 0;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 10px;

        &__cont {
            width: 100%;
            height: 34px;
            margin: 0;
            border-radius: 12px;

            &:nth-child(n + 5) {
                display: none;
            }
        }

        &__text {
            padding: 0 8px;
            overflow: hidden;
            font-size: 10px;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
    }
}

@include mobile {
    .artnav {
        width: calc(100% - 40px);
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 8px;

        &__cont:nth-child(4) {
            display: none;
        }

        &__text {
            font-size: 9px;
        }
    }
}
</style>
