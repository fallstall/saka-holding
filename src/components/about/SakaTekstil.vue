<script setup lang="ts">
import Title from '@/components/ui/Title.vue'
import CardCloth from '@/components/home/CardCloth.vue'
import Tekstil1 from '@/assets/images/SakaTekstil/Tekstil1.png'
import Tekstil2 from '@/assets/images/SakaTekstil/Tekstil2.png'
import Tekstil3 from '@/assets/images/SakaTekstil/Tekstil3.png'
</script>

<template>
  <section class="quality-section">
    <div class="quality-section__container">
      <Title 
        text="Наша главная задача - не просто предоставить качественную ткань, но и оказать каждому заказчику высокий уровень клиентского сервиса" 
        theme="left" 
        class="quality-section__title"
      />
      <div class="quality-section__grid">
        <div class="quality-section__item">
          <CardCloth 
            theme="max"
            :image="Tekstil1"
            class="quality-section__card"
          />
          <div class="quality-section__card-content">
            <h3 class="quality-section__card-title">Open end</h3>
            <p class="quality-section__card-text">
              Бюджетный трикотаж, имеет ворсистую и шероховатую поверхность из-за коротких волокон.
            </p>
          </div>
        </div>
        <div class="quality-section__item">
          <CardCloth 
            theme="max"
            :image="Tekstil2"
            class="quality-section__card"
          />
          <div class="quality-section__card-content">
            <h3 class="quality-section__card-title">Пенье компакт</h3>
            <p class="quality-section__card-text">
              Высшее качество трикотажной ткани, имеют гладкую поверхность без ворсинок
            </p>
          </div>
        </div>
        <div class="quality-section__item">
          <CardCloth 
            theme="max"
            :image="Tekstil3"
            class="quality-section__card"
          />
          <div class="quality-section__card-content">
            <h3 class="quality-section__card-title">Пенье компакт Плюс-EXCLUSIVE</h3>
            <p class="quality-section__card-text">
              полотно вяжется американскими нитками и окрашено немецкими красками высшего качества
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.quality-section {
  width: 100%;
  padding: 60px 0;
  background-color: var(--bg-color);
  
  &__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  &__title {
    font-size: 22px;
    margin-bottom: 33px;
    max-width: 500px;
    padding-left: 10px;
    color: #1a1f29;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 21px;
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__card {
    width: 100%;
    height: 170px; 
  }

  &__card-content {
    padding: 20px;
    width: 100%;
  }

  &__card-title {
    margin: 0;  
    font-size: 14px;
    font-weight: 700;
    color: var(--black-color);

  }

  &__card-text {
    font-size: 14px;
    color: var(--black-color);
    line-height: 1.5;
    margin: 0;
  }
}
</style>