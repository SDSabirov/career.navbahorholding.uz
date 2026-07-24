<script setup lang="ts">
const activities = [
  { img: '/img/teambuilding.png', label: 'Тимбилдинг' },
  { img: '/img/clean-up.png', label: 'Корпоративные мероприятия' },
  { img: '/img/charity.png', label: 'Благотворительные проекты' },
  { img: '/img/football.png', label: 'Спортивные мероприятия' },
]
</script>

<template>
  <section class="corporate">
    <h2 class="corporate__title">Корпоративная жизнь</h2>
    <p class="corporate__text">В Navbahor Holding мы ценим корпоративную культуру как основу успеха. Мы создаём среду, где каждый сотрудник чувствует себя уважаемым, вовлечённым и мотивированным раскрыть свой потенциал. Основу нашей культуры составляют сотрудничество, инновации и постоянное развитие. Мы поощряем открытость, командную работу и ценим разнообразие взглядов.</p>
    <div class="corporate__box">
      <div v-for="activity in activities" :key="activity.label" class="corporate__box-item">
        <img :src="activity.img" alt="">
        <p>{{ activity.label }}</p>
      </div>
    </div>
  </section>
</template>
