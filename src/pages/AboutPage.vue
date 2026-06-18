<script setup lang="ts">
import ClientSlider from '@/components/catalog/ClientSlider.vue'
import FabricSlider from '@/components/ui/FabricSlider.vue'
import SertSlider from '@/components/ui/SertSlider.vue'
import SakaTekstil from '@/components/about/SakaTekstil.vue';
import Aboutblock from '@/components/Aboutblock/aboutblock.vue';
import AboutInfoCard from '@/components/about/AboutInfoCard.vue';
import Title from '@/components/ui/Title.vue';
</script>

<template>
    <main class="about-page">
        <Aboutblock />
        <SakaTekstil />
        <AboutInfoCard />
        <section class="about-page__certificates">
            <Title
                class="about-page__section-title"
                theme="left"
                text="Saka Tekstil дорожит своей репутацией"
            />
            <SertSlider />
        </section>
        <ClientSlider />
        <FabricSlider />
    </main>
</template>
<style scoped lang="scss">
.about-page {
    width: 100%;
    max-width: 100%;
    overflow: hidden;

    &__certificates {
        padding-top: 52px;
        background-color: var(--bg-color);
    }

    &__section-title {
        width: min(1160px, calc(100% - 48px));
        margin: 0 auto 26px;
        color: var(--text-dark-color);
    }
}

@include tablet {
    .about-page {
        &__certificates {
            padding-top: 42px;
        }

        &__section-title {
            width: calc(100% - 32px);
            margin-bottom: 18px;
        }
    }
}

@include mobile {
    .about-page {
        &__certificates {
            padding-top: 34px;
        }

        &__section-title {
            width: calc(100% - 24px);
        }
    }
}
</style>
