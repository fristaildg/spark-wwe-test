<style src="./NavMenu.scss" lang="scss"></style>
<script src="./NavMenu.js"></script>

<template>
  <nav class="nav-menu">
    <HamburgerIcon @setMenu="toggleMenu"/>
    <ul class="menu-list" :class="isMenuOpen && 'is-open'">
      <li v-for="item in listItems"
        :key="item.name"
      >
        <a :href="item.link">
          {{item.name}}
        </a>
      </li>
      <li>
        <Button text="Join Now" class="join-button"/>
      </li>
    </ul>
  </nav>
</template>

