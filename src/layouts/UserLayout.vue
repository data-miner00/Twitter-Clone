<template>
  <div class="user-layout">
    <Topbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Topbar from "../components/Topbar.vue";

export default Vue.extend({
  components: {
    Topbar,
  },
});
</script>

<style lang="sass" scoped>
.user-layout
  position: relative
</style>
