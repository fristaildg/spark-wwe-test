<style src="./NavMenu.scss" lang="scss"></style>
<script src="./NavMenu.js"></script>

<template>
  <nav class="nav-menu">
    <HamburgerIcon/>
    <ul class="menu-list">
      <li v-for="item in listItems"
        :key="item.name"
      >
        <a :href="item.link">
          {{item.name}}
        </a>
      </li>
      <li>
        <Button text="Join Now"/>
      </li>
    </ul>
  </nav>
</template>

