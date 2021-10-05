<template>
  <div class="tweets">
    <PostItem />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostItem from "@/components/PostItem.vue";

export default Vue.extend({
  components: { PostItem },
});
</script>
