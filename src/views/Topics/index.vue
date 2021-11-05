<template>
  <div class="topics">
    <PageNavbar :links="links" />
    <div class="topics__content">
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
          name: "topics-followed",
        },
        {
          title: "Not Interested",
          name: "not-interested",
        },
      ];
    },
  },
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"

.topics
  width: 600px
  min-height: 100vh
</style>
