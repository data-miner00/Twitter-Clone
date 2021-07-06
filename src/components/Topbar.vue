<template>
  <div class="topbar">
    <!-- <slot></slot> -->
    <div class="topbar--regular">
      <div class="topbar--regular__title">
        <div>Home</div>
      </div>
      <div class="topbar--regular__icon">
        <fa :icon="['far', 'sun']" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="sass" scoped>
.topbar
  position: sticky
  top: 0
  width: 100%
  height: 53px
  padding: 0 16px
  border-bottom: 1px solid #eee
  background: white
  display: flex
  align-items: center
  &--regular
    display: flex
    align-items: center
    flex-grow: 1
    &__title
      flex-grow: 1
      flex-shrink: 1
      div
        line-height: 24px
        font-size: 20px
        font-weight: 800
        max-width: 100%
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
    &__icon
      margin-left: 16px
      min-height: 32px
      font-size: 20px
      min-width: 32px
      align-self: stretch
      justify-content: center
      display: flex
      align-items: center
      padding: 10px
      transition: background .2s
      border-radius: 250px
      transform: translateX(10px)
      color: rgb(121, 75, 196)
      cursor: pointer

      &:hover
        background: rgba(121, 75, 196, .1)
</style>
