<template>
  <div class="explore">
    <nav class="explore__nav">
      <router-link
        :to="{ name: 'Foryou' }"
        v-slot="{ isExactActive, navigate }"
      >
        <div
          class="explore__nav__link"
          :class="{ active: isExactActive }"
          @click="navigate"
        >
          <span>For you</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'News' }" v-slot="{ isExactActive, navigate }">
        <div
          class="explore__nav__link"
          :class="{ active: isExactActive }"
          @click="navigate"
        >
          <span>News</span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'Sports' }"
        v-slot="{ isExactActive, navigate }"
      >
        <div
          class="explore__nav__link"
          :class="{ active: isExactActive }"
          @click="navigate"
        >
          <span>Sports</span>
        </div>
      </router-link>
      <router-link :to="{ name: 'Fun' }" v-slot="{ isExactActive, navigate }">
        <div
          class="explore__nav__link"
          :class="{ active: isExactActive }"
          @click="navigate"
        >
          <span>Fun</span>
        </div>
      </router-link>
      <router-link
        :to="{ name: 'Entertainment' }"
        v-slot="{ isExactActive, navigate }"
      >
        <div
          class="explore__nav__link"
          :class="{ active: isExactActive }"
          @click="navigate"
        >
          <span>Entertainment</span>
        </div>
      </router-link>
    </nav>
    <div class="explore__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"
.explore
  width: 600px
  &__nav
    display: flex
    color: $footer-link-font-color
    position: sticky
    top: 53px
    background: #fff
    border-bottom: 1px solid rgb(239, 243, 244)
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
