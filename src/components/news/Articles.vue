<script setup lang="ts">
import Button from '../ui/Button.vue';
import Artitle from './Artitle.vue';
import Artnav from './Artnav.vue';


</script>

<template>
<div class="art">
    <Button theme="text" text="Показать еще" class="btn-art"/>
    <Artitle/>
</div>
</template>

<style lang="scss">
.btn-art{
    margin-bottom: 100px;
    width: 236px !important;
    height: 55px !important;
    border-radius: 100px !important;
    justify-self: center;
    align-self: center;}
.art{
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: -50px;
}

@include tablet {
    .art {
        width: calc(100% - 48px);
        margin: 0 auto;

        .btn-art {
            width: 190px !important;
            height: 46px !important;
            margin: 0 auto 58px;
        }
    }
}

@include mobile {
    .art {
        width: calc(100% - 40px);

        .btn-art {
            width: 180px !important;
            height: 44px !important;
            margin-bottom: 52px;
        }
    }
}
</style>
