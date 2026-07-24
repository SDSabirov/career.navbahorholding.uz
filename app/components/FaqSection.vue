<script setup lang="ts">
const openIndex = ref<number | null>(null)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="faq">
    <h2 class="faq__title">FAQ для соискателей</h2>
    <p class="faq__intro">Вы спрашиваете — мы отвечаем!<br>Мы собрали ответы на самые популярные вопросы, чтобы вам было проще сделать первый шаг к работе мечты.</p>

    <FaqItem question="1. Как подать резюме?" :open="openIndex === 0" @toggle="toggle(0)">
      <p>Отправьте резюме на email: <a href="mailto:navbahorhr@gmail.com">navbahorhr@gmail.com</a> или в ТГ по указанным номерам.</p>
    </FaqItem>

    <FaqItem question="2. Как подготовиться к собеседованию?" :open="openIndex === 1" @toggle="toggle(1)">
      <ul>
        <li>Ознакомьтесь с компанией и ее <a href="#vacancy__tolink">вакансиями</a>.</li>
        <li>Подготовьте интересующие вас вопросы.</li>
        <li>Запишите их.</li>
      </ul>
    </FaqItem>

    <FaqItem question="3. Какие этапы отбора проходят кандидаты?" :open="openIndex === 2" @toggle="toggle(2)">
      <ul>
        <li>Первый этап — Телефонное интервью.</li>
        <li>Второй этап — Очное интервью.</li>
      </ul>
    </FaqItem>

    <FaqItem question="4. Нет подходящей вакансии, что делать?" :open="openIndex === 3" @toggle="toggle(3)">
      <p>Вы всегда можете заполнить анкету по ссылке:
        <a href="https://docs.google.com/forms/d/1Hj8gS5mTCwGI_m50Dg2lzmnHgAHm9lSd3ct8wmrLW08/edit" target="_blank" rel="noopener">Заполнить анкету</a></p>
    </FaqItem>
  </section>
</template>
