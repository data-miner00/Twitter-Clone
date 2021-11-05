<template>
  <div class="noti-item">
    <div class="noti-item__left">
      <svg viewBox="0 0 24 24" aria-hidden="true" v-if="type == 'follow'">
        <g>
          <path
            d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"
          ></path>
        </g>
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        style="color: rgb(249, 24, 128)"
        v-else-if="type == 'like'"
      >
        <g fill="currentColor">
          <path
            d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"
          ></path>
        </g>
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        style="color: rgb(0, 186, 124)"
        v-else-if="type == 'retweet'"
      >
        <g fill="currentColor">
          <path
            d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"
          ></path>
        </g>
      </svg>
    </div>
    <div class="noti-item__right">
      <div class="noti-item__right__top">
        <div class="noti-item__right__top__avatar">
          <img :src="avatar" :alt="`${username} avatar`" />
        </div>
      </div>
      <div class="noti-item__right__btm">
        <span>{{ username }}</span> {{ action }}
      </div>
      <div class="noti-item__right__btm-text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    type: String,
    username: String,
    avatar: String,
  },
  computed: {
    action(): string {
      switch (this.type) {
        case "follow":
          return "followed you";
        case "like":
          return "liked your reply";
        case "retweet":
          return "retweeted your retweet/tweet";
        default:
          return "done some unknown action";
      }
    },
  },
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
    &__btm-text
      color: $post-action-color
      margin-top: 12px
      max-width: 508px
  &:hover
    background: rgba(0, 0, 0, 0.03)
</style>
