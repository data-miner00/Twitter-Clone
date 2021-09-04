<template>
  <div class="content-wrapper">
    <div class="content-wrapper__title">
      <div class="content-wrapper__title__text">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="content-wrapper__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    title: String,
    isSuggestedTopic: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="sass" scoped>
.content-wrapper
  &__title
    padding: 12px 16px
    &__text
      font-weight: 800
      line-height: 24px
      font-size: 20px
      color: rgb(15, 20, 25)
</style>
