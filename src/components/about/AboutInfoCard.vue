<script setup lang="ts">
import InfoCard from '@/components/about/InfoCard.vue'
import logist from '@/assets/images/SakaTekstil/logist.png'
import info2 from '@/assets/images/SakaTekstil/info2.png'
import info3 from '@/assets/images/SakaTekstil/info3.png'
import info4 from '@/assets/images/SakaTekstil/info4.png'
import info5 from '@/assets/images/SakaTekstil/info5.png'
import info6 from '@/assets/images/SakaTekstil/info6.png'
</script>
<template>
  <div class="page">
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
        description="Вместе с товаром мы предоставляем полиэтиленовую упаковку, бесплатную загрузку товара
со склада и бесплатные образцы."
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
  </div>
</template>


<style scoped>
.page{
    background-color: var(--gray);

}
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 40px ;
}
</style>