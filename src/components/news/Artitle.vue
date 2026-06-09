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
</style>