<script>
</script>

<template>
    <RouterLink to="/" class="logo">
        <img src="./../../assets/images/logo.svg" alt="Saka-Holding">
    </RouterLink>  
</template>

<style scoped lang="scss">
.logo {
    display: inline-flex;
    align-items: center;
    flex: 0 0 auto;
}

.logo img {
    width: 121px;
    height: auto;
    display: block;
}
@include tablet {

    .logo {
        padding-right: 40px;
    }
}
</style>
