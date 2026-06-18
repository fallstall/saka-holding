<script setup lang="ts">
import Title from '../ui/Title.vue';


</script>

<template>
    <div class="arti">
        <Title theme="left" text="Статьи"/>
        <span class="arti__text">Здесь вы найдете полезную информацию о правильном<br> 
        уходе за тканью, важные советы от наших специалистов<br> 
        и многое другое</span>
    </div>
</template>

<style lang="scss">
.arti{
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-right: 650px;
    &__text{
        font-size: 18px;
        font-weight: 400;
        padding-left: 10px;
        margin-top: -10px;
    }
}

@include tablet {
    .arti {
        width: 100%;
        margin: 0;

        :deep(.title) {
            width: 100%;
            margin: 0 0 10px;
        }

        &__text {
            padding-left: 0;
            margin-top: 0;
            font-size: 14px;
            line-height: 1.4;

            br {
                display: none;
            }
        }
    }
}

@include mobile {
    .arti {
        &__text {
            font-size: 12px;
        }
    }
}
</style>
