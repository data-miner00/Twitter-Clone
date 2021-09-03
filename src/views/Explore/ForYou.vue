<template>
  <div class="for-you">
    <section class="for-you__banner">
      <ExploreBanner
        category="Weather"
        timeElapsed="LIVE"
        title="Hurricane Ida hits Louisiana as Category 4 storm"
        backgroundImageUrl="/cloud.jpeg"
        :isLiveStyle="true"
      />
    </section>
    <section class="for-you__trends-for-you"></section>
    <section class="for-you__whats-happening"></section>
    <section class="for-you__custom-topic"></section>
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

<style lang="sass" scoped>
.for-you
  min-height: 200vh
</style>
