<script setup lang="ts">
const services = [
  { href: 'https://navbahor-exclusive.uz/', label: 'Navbahor Exclusive' },
  { href: 'https://navbahor-marketing.uz/', label: 'Navbahor Marketing' },
  { href: 'https://navbahor-sanoat.uz/', label: 'Navbahor Sanoat' },
  { href: 'https://memory-ag.uz/', label: 'Memory Pharm A.G.' },
  { href: 'https://rompharmns.uz/', label: 'Rompharm' },
  { href: 'https://navbahor-apteka.uz/', label: 'Navbahor Apteka' },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__dad">
        <div class="footer__block">
          <a href="#header" class="footer__logo">
            <img src="/img/holding-logo.png" alt="Navbahor Holding">
          </a>
          <div class="footer__box">
            <p class="footer__box-title">Услуги</p>
            <ul class="footer__box-ul">
              <a
                v-for="service in services"
                :key="service.href"
                :href="service.href"
                class="footer__box-li"
                target="_blank"
                rel="noopener"
              >{{ service.label }}</a>
            </ul>
          </div>
        </div>
        <div class="footer__tell">
          <a href="tel:+998712037030" class="footer__tell-link">
            <img src="/img/tel-footer.svg" alt="">
            <p>+998(71) 203-70-30</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
