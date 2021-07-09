<template>
  <div class="section-title">
    <div class="section-title__title">
      <span>{{ text }}</span>
    </div>
    <div class="section-title__action-icon">
      <div class="section-title__semi-wrap">
        <fa :icon="['far', 'sun']" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    text: String,
  },
});
</script>

<style lang="sass" scoped>
.section-title
  padding: 12px 16px
  display: flex
  border-bottom: 1px solid rgb(239, 243, 244)
  align-items: center
  &__title
    font-size: 20px
    font-weight: 800
    flex-grow: 1

  &__action-icon
    height: 20px

  &__semi-wrap
    min-height: 32px
    font-size: 20px
    min-width: 32px
    align-self: stretch
    justify-content: center
    display: flex
    align-items: center
    padding: 8px
    transition: background .2s
    border-radius: 250px
    color: rgb(121, 75, 196)
    cursor: pointer
    transform: translateY(-8px)

    &:hover
      background: rgba(121, 75, 196, .1)
</style>
