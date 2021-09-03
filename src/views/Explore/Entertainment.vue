<template>
  <div class="entertainment">
    <section class="entertainment__banner">
      <ExploreBanner
        category="Strategy"
        timeElapsed="17 minutes ago"
        title="Genshin Impact: Everything You Need To Know About Fishing"
        backgroundImageUrl="/fishing.jpg"
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
