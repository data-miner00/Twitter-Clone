<template>
  <div class="news">
    <ExploreBanner
      category="Economy"
      timeElapsed="September 2, 2021"
      title="US university students face back-to-campus vaccine mandates"
      backgroundImageUrl="/yale.webp"
      :isLiveStyle="false"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExploreBanner from "@/components/ExploreBanner.vue";
export default Vue.extend({
  components: {
    ExploreBanner,
  },
});
</script>
