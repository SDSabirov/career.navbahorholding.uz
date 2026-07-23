<script setup lang="ts">
const navLinks = [
  { href: '#direction', label: 'О компании' },
  { href: '#career', label: 'Карьера' },
  { href: '#training', label: 'Обучение' },
  { href: '#contact', label: 'Контакты' },
]

const burgerActive = ref(false)
const listActive = ref(false)

function toggleMenu() {
  burgerActive.value = !burgerActive.value
  listActive.value = !listActive.value
}

function closeMenu() {
  listActive.value = false
  setTimeout(() => {
    burgerActive.value = false
  }, 350)
}
</script>

<template>
  <header id="header" class="header">
    <div class="header__nav">
      <div class="container">
        <div class="nav__box">
          <a href="#" class="nav__logo">
            <img src="/img/holding-logo.png" alt="Navbahor Holding">
          </a>
        </div>
        <button class="burger" :class="{ active: burgerActive }" aria-label="Меню" @click="toggleMenu">
          <span></span>
        </button>
        <ul class="nav__list" :class="{ active: listActive }">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href" class="nav__list-link" @click="closeMenu">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <section class="header__content">
      <video autoplay muted loop playsinline class="header__video">
        <source src="/videos/header.mp4">
      </video>
      <div class="container">
        <div class="header__content-box">
          <h1 class="header__content-title">Navbahor Holding</h1>
          <h2 class="header__content-text">КАРЬЕРА</h2>
        </div>
      </div>
    </section>
  </header>
</template>
