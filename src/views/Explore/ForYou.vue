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
    <div class="secondary-seperator"></div>
    <section class="for-you__trends-for-you">
      <ForYouContentWrapper title="Trends for you">
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </ForYouContentWrapper>
    </section>
    <section class="for-you__whats-happening">
      <ForYouContentWrapper title="What's happening">
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </ForYouContentWrapper>
    </section>
    <section class="for-you__custom-topic"></section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExploreBanner from "@/components/ExploreBanner.vue";
import ForYouContentWrapper from "@/components/ForYouContentWrapper.vue";
import TrendItem from "@/components/Sidewall/TrendItem.vue";

export default Vue.extend({
  components: {
    ExploreBanner,
    ForYouContentWrapper,
    TrendItem,
  },
});
</script>

<style lang="sass" scoped>
.for-you
  min-height: 200vh
</style>
