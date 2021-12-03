<!-- Used for -- Settings, Messages -->

<template>
  <div class="double-layout">
    <!-- Header -->
    <header class="double-layout__header">
      <div>
        <Sidebar />
      </div>
    </header>

    <main class="double-layout__main">
      <div class="wrap">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Sidebar from "../components/Sidebar/index.vue";

export default Vue.extend({
  components: {
    Sidebar,
  },
});
</script>

<style lang="sass" scoped>
.double-layout
  display: flex
  &__header
    flex-grow: 1
    display: flex
    z-index: 3
    justify-content: flex-end
    border-right: 1px solid #eee

  &__main
    min-height: 100vh
    flex-shrink: 1
    flex-grow: 1
    align-items: flex-start

    .wrap
      justify-content: space-between
      display: flex
      width: 990px
</style>
