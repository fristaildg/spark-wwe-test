<style src="./HamburgerIcon.scss" lang="scss"></style>
<script src="./HamburgerIcon.js"></script>

<template>
  <div class="hamburger-icon"
    :class="isMenuOpen && 'is-open'"
    @click="toggleMenu"
  >
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
</template>


