<template>
  <div
    class="following-btn"
    @mouseover="mouseover"
    @mouseout="mouseout"
    :class="{ hover: hovering }"
  >
    <div>
      <span>{{ label }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    hovering: false,
  }),
  methods: {
    mouseover(): void {
      this.hovering = true;
    },
    mouseout(): void {
      this.hovering = false;
    },
  },
  computed: {
    label(): string {
      return this.hovering ? "Unfollow" : "Following";
    },
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"

.following-btn
  min-height: 32px
  min-width: 79px
  border-radius: 250px
  border: 1px solid rgb(121, 75, 196)
  color: rgb(121, 75, 196)
  display: flex
  justify-content: center
  align-items: center
  font-weight: 700
  transition: background .2s
  &:hover
    background: rgba(121, 75, 196, .1)
  div
    width: fit-content
  &.hover
    div
      color: $accent-red
</style>
