<template>
  <div class="home">
    <PostItem />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostItem from "../components/PostItem.vue";

export default Vue.extend({
  name: "Home",
  components: {
    PostItem,
  },
});
</script>

<style lang="sass" scoped></style>
