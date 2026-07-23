<script setup lang="ts">
const logos = [
  'exclusive',
  'holding',
  'memorypharm',
  'marketing',
  'rompharm',
  'sanoat',
  'setaptek',
]

const directions = [
  {
    icon: '/img/factory.svg',
    title: 'Производство',
    text: 'Современные производственные мощности, соответствующие международным стандартам качества.',
  },
  {
    icon: '/img/truck.svg',
    title: 'Дистрибуция',
    text: 'Эффективная логистическая система, гарантирующая своевременную доставку продукции.',
  },
  {
    icon: '/img/pill.svg',
    title: 'Аптечная сеть',
    text: 'Широкая сеть аптек, обеспечивающая доступ населения к лекарствам.',
  },
]
</script>

<template>
  <section id="direction" class="direction">
    <h2 class="direction__title">Наши направления</h2>
    <div class="direction__infinite-slider">
      <div class="track">
        <!-- логотипы дублируются для бесшовной анимации -->
        <div v-for="(logo, index) in [...logos, ...logos]" :key="`${logo}-${index}`" class="track__item">
          <img :src="`/img/${logo}.png`" alt="">
        </div>
      </div>
    </div>
    <p class="direction__text">Navbahor Holding охватывает все ключевые аспекты фармацевтической деятельности, обеспечивая полный цикл от разработки до поставки лекарственных средств.</p>
    <div class="container">
      <div class="direction__box">
        <div v-for="direction in directions" :key="direction.title" class="direction__box-item">
          <img :src="direction.icon" alt="">
          <div class="direction__box-item-text">
            <h2>{{ direction.title }}</h2>
            <p>{{ direction.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
