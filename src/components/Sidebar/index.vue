<template>
  <header class="header">
    <nav class="header__sidebar">
      <Item />
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Item from "./Item.vue";

export default Vue.extend({
  components: {
    Item,
  },
});
</script>

<style lang="sass" scoped>
.header
  display: flex
  flex-grow: 1
  justify-content: flex-end
  &__sidebar
    padding: 0 10px
    max-width: 275px
    min-width: 88px
</style>
