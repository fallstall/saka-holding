<script setup lang="ts">
import InfoCard from '@/components/about/InfoCard.vue'
import logist from '@/assets/images/SakaTekstil/logist.png'
import info2 from '@/assets/images/SakaTekstil/info2.png'
import info3 from '@/assets/images/SakaTekstil/info3.png'
import info4 from '@/assets/images/SakaTekstil/info4.png'
import info5 from '@/assets/images/SakaTekstil/info5.png'
import info6 from '@/assets/images/SakaTekstil/info6.png'
import cloth from '@/assets/images/SakaTekstil/cloth.png'
import Title from '@/components/ui/Title.vue'
</script>

<template>
  <div class="page">
    <div class="cards-wrapper">
              <Title 
        text="Наша главная задача - не просто предоставить качественную ткань, но и оказать каждому заказчику высокий уровень клиентского сервиса" 
        theme="left" 
        class="section-title"
      />
      <div class="cards-grid">
        <InfoCard 
          :icon="logist" 
          title="ЛОГИСТИКА"
          description="Весь ассортимент в наличии на складе в Москве. Вам не потребуется тратить свои ресурсы на доставку ткани из Турции."
        />
        
        <InfoCard 
          :icon="info6" 
          title="ПРОИЗВОДСТВО"
          description="Регулярное наличие ткани позволяет не останавливать процесс вашего производства и минимизирует финансовые потери."
        />
        
        <InfoCard 
          :icon="info5" 
          title="ДОПОЛНИТЕЛЬНЫЕ МАТЕРИАЛЫ"
          description="Вместе с товаром мы предоставляем полиэтиленовую упаковку, бесплатную загрузку товара со склада и бесплатные образцы."
        />
        
        <InfoCard 
          :icon="info4" 
          title="ЛОЯЛЬНОСТЬ"
          description="Наш трикотаж закупают известные бренды. Это позволит вам создать собственный качественный бренд одежды."
        />
        
        <InfoCard 
          :icon="info3" 
          title="УНИКАЛЬНОСТЬ"
          description="Мы предоставляем клиентам широкую палитру цветов, что позволяет создавать уникальные коллекции одежды."
        />
        
        <InfoCard 
          :icon="info2" 
          title="КАЧЕСТВО"
          description="Наша ткань обрабатывается специальным силиконовым составом, что позволяет ей не терять свои свойства с течением времени."
        />
      </div>
      <img 
        :src="cloth" 
        alt="Ткань" 
        class="fabric-image"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  background-color: var(--gray);
  padding: 80px 0;
}

.section-title {
  color: var(--blacks);
  font-size: 26px;
  margin-bottom: 20px;
  max-width: 850px;
  padding-right: 20px;
}
.cards-wrapper {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  position: relative;
  z-index: 2;
}

.fabric-image {
  position: absolute;
  bottom: 40px;
  right: -100px;
  width: 1150px;
  height: 533px;
  z-index: 1;
  pointer-events: none;
  object-fit: contain;
}

@include tablet {
  .page {
    padding: 46px 0 28px;
  }

  .cards-wrapper {
    max-width: 100%;
    padding: 0 16px;
  }

  .section-title {
    width: 100%;
    max-width: 560px;
    margin: 0 0 24px;
    padding-right: 0;
    font-size: 20px;
  }

  .cards-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    padding-bottom: 76px;
  }

  .fabric-image {
    right: -40px;
    bottom: -18px;
    width: 520px;
    height: auto;
  }
}

@include mobile {
  .page {
    padding: 34px 0;
  }

  .cards-wrapper {
    padding: 0 12px;
  }

  .section-title {
    margin-bottom: 18px;
    font-size: 16px;
  }

  .cards-grid {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-bottom: 0;
  }

  .fabric-image {
    display: none;
  }
}
</style>
