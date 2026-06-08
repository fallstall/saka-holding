<script lang="ts">

</script>

<template>
    <div class="warning">
        <img src="../../../assets/images/Warning.png" class="warning__img">
        <p class="warning__title">ВНИМАНИЕ!<span class="warning__light">
            Цветопередача на вашем<br>
            мониторе может значительно отличаться<br>
            от оригинального цвета
        </span></p>
    </div>
</template>

<style lang="scss">
    .warning{
        width: 560px;
        height: 120px;
        border-style: dashed;
        border-color: var(--darkGold);
        border-radius: var(--border-radius-xs);
        display: flex;
        flex-direction: row;
        align-items: center;

        &__img{
            width: 60px;
            height: 60px;
            margin-left: 30px;
        }

        &__title{
            font-size: 16px;
            font-weight: 500;
            margin-left: 30px;
        }

        &__light{
            font-size: 16px;
            font-weight: 400;
        }
    }
</style>