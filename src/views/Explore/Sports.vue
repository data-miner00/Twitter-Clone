<template>
  <div class="sports">
    <section class="sports__banner">
      <ExploreBanner
        category="Sports"
        timeElapsed="August 31, 2021"
        title="Afghan Paralympian beats the odds to compete in Tokyo"
        backgroundImageUrl="/olympics.webp"
        :isLiveStyle="false"
      />
    </section>
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
