<script setup lang="ts">
const phones = [
  '+998 93 111 33 08',
  '+998 93 123 33 08',
  '+998 93 555 33 08',
  '+998 93 111 55 58',
]

const socials = [
  { href: 'https://t.me/Navbahordorixona', icon: '/img/tg.svg', label: 'Telegram' },
  { href: 'https://www.instagram.com/hr_navbahor', icon: '/img/insta.svg', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/navbahor-group-of-companies/', icon: '/img/in.svg', label: 'LinkedIn' },
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <div class="contact__top">
        <h2 class="contact__title">Контакты HR-отдела</h2>
        <div class="contact__text">
          <p class="contact__text-item">Готовы ответить на ваши вопросы!</p>
          <p class="contact__text-item">Наши HR-специалисты помогут вам выбрать вакансию, подскажут по процессу найма и проконсультируют по условиям работы.</p>
          <p class="contact__text-item">Свяжитесь с нами по телефону, почте или заполните <a href="https://docs.google.com/forms/d/1Hj8gS5mTCwGI_m50Dg2lzmnHgAHm9lSd3ct8wmrLW08/edit">онлайн форму</a> — мы ждем вас!</p>
        </div>
        <div class="contact__box">
          <div class="contact__box-tell">
            <div class="contact__box-tell-img">
              <img src="/img/tell.svg" alt="">
              <h2>ТЕЛЕФОН</h2>
            </div>
            <div class="contact__box-tell-block">
              <p>График работы:<br>Пн – Пт, 09:00 – 18:00</p>
              <ul>
                <li v-for="phone in phones" :key="phone">
                  <a :href="`tel:${phone.replace(/\s/g, '')}`">{{ phone }}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="contact__box-column">
            <div class="contact__box-email">
              <div class="contact__box-email-flex">
                <img src="/img/email.svg" alt="">
                <h2>ЭЛЕКТРОННАЯ ПОЧТА</h2>
              </div>
              <a class="contact__box-email-a" href="mailto:navbahorhr@gmail.com">navbahorhr@gmail.com</a>
            </div>
            <div class="contact__box-social">
              <div class="contact__box-social-flex">
                <img src="/img/social.svg" alt="">
                <h2>МЫ В СОЦИАЛЬНЫХ СЕТЯХ</h2>
              </div>
              <div class="contact__box-social-a">
                <a v-for="social in socials" :key="social.href" target="_blank" rel="noopener" :href="social.href">
                  <img :src="social.icon" :alt="social.label">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="contact__location">
          <h2 class="contact__location-title">Офисы компании</h2>
          <p class="contact__location-city">Ташкент</p>
          <p class="contact__location-text">г. Ташкент, Чиланзарский р-н, ул CHO'PON-OTA, дом 17/1</p>
          <div class="contact__location-map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A8b1c3f2e6598043182c0da1e63fcc75717670897d19c893fabf03cdd2cbb3881&amp;source=constructor"
              width="1000"
              height="500"
              frameborder="0"
              loading="lazy"
              title="Офис Navbahor Holding на карте"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
