<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <div class="sidebar__top__logo">
        <img src="logo.svg" alt="logo" height="42" />
      </div>
      <div class="sidebar__top__links">
        <Item
          v-for="navLink in navLinks"
          :key="navLink.link"
          :linkTitle="navLink.link"
          :icon="navLink.icon"
          :to="navLink.to"
        />
      </div>
      <div class="sidebar__top__tweet">
        <div>
          <span>Tweet</span>
        </div>
      </div>
    </div>
    <div class="sidebar__bottom"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Item from "./Item.vue";

export default Vue.extend({
  components: {
    Item,
  },
  computed: {
    navLinks() {
      return [
        {
          link: "Home",
          icon: "igloo",
          to: "/s",
        },
        {
          link: "Explore",
          icon: "hashtag",
          to: "/s",
        },
        {
          link: "Notifications",
          icon: "bell",
          to: "/s",
        },
        {
          link: "Messages",
          icon: "envelope",
          to: "/s",
        },
        {
          link: "Bookmarks",
          icon: "bookmark",
          to: "/s",
        },
        {
          link: "Lists",
          icon: "sticky-note",
          to: "/s",
        },
        {
          link: "Profile",
          icon: "user",
          to: "/s",
        },
        {
          link: "More",
          icon: "ellipsis-h",
          to: "/s",
        },
      ];
    },
  },
});
</script>

<style lang="sass" scoped>

.sidebar
  padding: 0 12px
  width: 275px
  position: sticky
  top: 0
  // min-width: 88px
  &__top
    &__logo
      display: flex
      height: 48px
      width: 48px
      justify-content: center
      align-items: center
    &__tweet
      width: 90%
      border-radius: 250px
      background-color: rgb(121, 75, 196)
      color: white
      font-weight: 700
      margin: 16px 0
      display: flex
      height: 48px
      justify-content: center
      align-items: center
      transition: background 0.2s
      cursor: pointer
      &:hover
        background: rgb(134, 93, 202)
</style>
