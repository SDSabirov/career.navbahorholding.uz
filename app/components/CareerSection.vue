<script setup lang="ts">
const reasons = [
  {
    icon: '/img/stats.svg',
    title: 'Профессинальное развитие',
    text: 'Курсы и тренинги для повышения квалификации и освоения новых навыков.',
  },
  {
    icon: '/img/users.svg',
    title: 'Лидерство и управление',
    text: 'Программы для развития лидерских качеств и эффективного управления командами.',
  },
  {
    icon: '/img/work.svg',
    title: 'Развитие карьеры',
    text: 'Индивидуальные планы развития и карьерные консультанции.',
  },
]
</script>

<template>
  <section id="career" class="career">
    <h2 class="career__title">Карьера</h2>
    <div class="container">
      <div class="career__box">
        <p class="career__box-text">Карьера в NAVBAHOR HOLDING — это больше, чем просто должность.</p>
        <p class="career__box-text">Это возможность для профессионального роста, развития и реального вклада в улучшение здоровья общества. Мы ценим каждого сотрудника и создаём условия, в которых каждый может раскрыть свой потенциал.</p>
      </div>
    </div>
    <h2 class="career__why-title">Почему выбирают нас?</h2>
    <div class="container">
      <div class="career__why-box">
        <template v-for="(reason, index) in reasons" :key="reason.title">
          <div v-if="index === 1" class="line-top"></div>
          <div v-else-if="index === 2" class="line-bottom"></div>
          <div class="career__why-box-item">
            <img :src="reason.icon" alt="">
            <div class="arrow"></div>
            <div class="career__why-box-item-text">
              <p>{{ reason.title }}</p>
              <p>{{ reason.text }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
