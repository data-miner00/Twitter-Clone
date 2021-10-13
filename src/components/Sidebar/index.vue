<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <div class="sidebar__top__logo">
        <img src="/logo.svg" alt="logo" height="42" />
      </div>
      <div class="sidebar__top__links">
        <Item
          v-for="navLink in navLinks"
          :key="navLink.link"
          :linkTitle="navLink.link"
          :icon="navLink.icon"
          :to="navLink.to"
          :active="navLink.active"
        />
      </div>
      <div class="sidebar__top__tweet">
        <div>
          <span>Tweet</span>
        </div>
      </div>
    </div>
    <div class="sidebar__bottom">
      <UserPanel />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Item from "./Item.vue";
import UserPanel from "./UserPanel.vue";

export default Vue.extend({
  components: {
    Item,
    UserPanel,
  },
  computed: {
    navLinks() {
      return [
        {
          link: "Home",
          icon: "igloo",
          to: "/u",
        },
        {
          link: "Explore",
          icon: "hashtag",
          to: "/u/explore",
        },
        {
          link: "Notifications",
          icon: "bell",
          to: "/u/notifications",
        },
        {
          link: "Messages",
          icon: "envelope",
          to: "/u/messages",
        },
        {
          link: "Bookmarks",
          icon: "bookmark",
          to: "/u/bookmarks",
        },
        {
          link: "Lists",
          icon: "sticky-note",
          to: "/u/lists",
        },
        {
          link: "Profile",
          icon: "user",
          to: "/u/profile",
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
  height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
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
  &__bottom
    margin-top: auto
</style>
