<template>
  <div class="user-layout">
    <!-- Header -->
    <header class="user-layout__header">
      <div>
        <Sidebar />
      </div>
    </header>

    <main class="user-layout__main">
      <div class="wrap">
        <div class="user-layout__main__wall">
          <Topbar />
          <router-view />
        </div>
        <div class="user-layout__main__sidewall"></div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Topbar from "../components/Topbar.vue";
import Sidebar from "../components/Sidebar/index.vue";

export default Vue.extend({
  components: {
    Topbar,
    Sidebar,
  },
});
</script>

<style lang="sass" scoped>
.user-layout
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
    &__wall
      max-width: 600px
      min-height: 100%
      border-right: 1px solid #eee
      box-sizing: content-box
    &__sidewall
      width: 350px
      background: #eee
      min-height: 1248px
</style>
