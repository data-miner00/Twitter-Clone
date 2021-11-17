<template>
  <div class="show-more">{{ btnText }}</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    btnText: {
      type: String,
      default: "Show more",
    },
  },
});
</script>

<style lang="sass" scoped>
.show-more
  padding: 16px
  color: rgb(121, 75, 196)
  font-size: 15px
  transition: background .2s
  cursor: pointer
  &:hover
    background: rgba(0, 0, 0, 0.03)
</style>
