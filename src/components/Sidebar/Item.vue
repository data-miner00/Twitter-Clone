<template>
  <div class="item">
    <div class="item__wrapper">
      <div class="item__wrapper__icon">
        <fa :icon="icon" />
      </div>
      <div class="item__wrapper__title">
        <div>
          <span>{{ linkTitle }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    linkTitle: String,
    icon: String,
    to: String,
  },
});
</script>

<style lang="sass" scoped>
.item
  width: 100%
  padding: 4px 0
  display: flex
  cursor: pointer
  &:hover &__wrapper
    background: rgba(121, 75, 196, 0.1)
  &__wrapper
    display: flex
    padding: 12px
    color: rgb(121, 75, 196)
    align-items: center
    border-radius: 999px
    flex-shrink: 1
    transition: background 0.2s

    &.active
      color: rgb(121, 75, 196)
    &__icon
      width: 30px
      text-align: center
      font-size: 20px
    &__title
      font-size: 20px
      font-weight: 700
      line-height: 24px
      text-transform: capitalize
      div
        margin: 0 12px 0 16px
</style>
