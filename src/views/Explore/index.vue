<template>
  <div class="explore">
    <PageNavbar :links="links" />
    <div class="explore__content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PageNavbar from "@/components/PageNavbar.vue";

export default Vue.extend({
  components: {
    PageNavbar,
  },
  computed: {
    links() {
      return [
        {
          title: "For you",
          name: "Foryou",
        },
        {
          title: "News",
          name: "News",
        },
        {
          title: "Sports",
          name: "Sports",
        },
        {
          title: "Fun",
          name: "Fun",
        },
        {
          title: "Entertainment",
          name: "Entertainment",
        },
      ];
    },
  },
});
</script>

<style lang="sass" scoped>
.explore
  width: 600px
</style>
