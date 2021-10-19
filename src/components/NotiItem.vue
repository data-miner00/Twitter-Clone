<template>
  <div class="noti-item">
    <div class="noti-item__left">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path
            d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="noti-item__right">
      <div class="noti-item__right__top">
        <div class="noti-item__right__top__avatar">
          <img src="/default_profile_bigger.png" alt="default profile avatar" />
        </div>
      </div>
      <div class="noti-item__right__btm">
        <span>The world</span> followed you
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"
.noti-item
  padding: 12px 16px
  border-bottom: 1px solid #eee
  transition: background 0.2s
  cursor: pointer
  background: white
  display: flex
  &__left
    flex-basis: 48px
    flex-grow: 0
    margin-right: 12px
    height: 100%
    display: flex
    flex-direction: column
    align-items: flex-end
    svg
      display: block
      height: 30px
      width: 30px
      fill: $twitter-purple
  &__right
    flex-grow: 1
    padding-bottom: 4px
    &__top
      margin-bottom: 12px
      &__avatar
        height: 32px
        width: 32px
        border-radius: 999px
        overflow: hidden
        img
          height: 32px
          width: 32px

    &__btm
      span
        font-weight: 700
        &:hover
          text-decoration: underline
  &:hover
    background: rgba(0, 0, 0, 0.03)
</style>
