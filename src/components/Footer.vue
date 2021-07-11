<template>
  <nav class="footer">
    <router-link
      v-for="(navLink, index) in navLinks"
      :key="index"
      :to="navLink.destination"
      class="footer__link"
      v-html="navLink.name"
    >
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    navLinks: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"

.footer
  font-size: 13px
  padding: 12px 16px
  display: flex
  flex-wrap: wrap
  justify-content: center

  &__link
    display: block
    padding-right: 16px
    margin: 4px 0
    color: $footer-link-font-color
    &:hover
      text-decoration: underline
</style>
