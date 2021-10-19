<template>
  <div class="notifications">
    <PageNavbar :links="links" />
    <div class="notifications__content">
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
          title: "All",
          name: "All",
        },
        {
          title: "Mentions",
          name: "Mentions",
        },
      ];
    },
  },
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"

.notifications
  width: 600px
</style>
