<template>
  <nav class="page-navbar">
    <router-link
      v-for="link in links"
      :key="link.name"
      :to="{ name: link.name }"
      v-slot="{ isExactActive, navigate }"
    >
      <div
        class="page-navbar__link"
        :class="{ active: isExactActive }"
        @click="navigate"
      >
        <span>{{ link.title }}</span>
      </div>
    </router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    links: Array,
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"

.page-navbar
  display: flex
  color: $footer-link-font-color
  position: sticky
  top: 53px
  background: #fff
  border-bottom: 1px solid rgb(239, 243, 244)
  z-index: 999
  &__link
    text-align: center
    padding: 0 16px
    flex-grow: 1
    font-weight: 700
    cursor: pointer
    transition: background-color .2s ease
    span
      display: block
      padding: 16px 0
      width: fit-content
      margin: 0 auto

    &:hover
      background-color: rgba(15, 20, 25, .1)

    &.active
      color: $twitter-purple
      & span
        border-bottom: 4px solid $twitter-purple
</style>
