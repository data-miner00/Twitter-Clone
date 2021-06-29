<template>
  <div class="topbar">
    <slot></slot>
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
  left: 0
  width: 100%
  height: 53px
  padding: 0 16px
  border-bottom: 1px solid #eee
  background: white
</style>
