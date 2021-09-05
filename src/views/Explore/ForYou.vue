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
        <TrendItem
          :trendingByCategory="true"
          category="Paralympics"
          topicOrHashtag="#Gold ✨"
          :tweetCount="78812"
        />
        <TrendItem />
        <TrendItem />
        <TrendItem />
      </ForYouContentWrapper>
    </section>
    <section class="for-you__whats-happening">
      <ForYouContentWrapper title="What's happening">
        <NewsItem
          title="The “best places to live in the U.S.” don’t live up to the hype"
          timeElapsed="September 1, 2021"
          categoryOrOfficial="Bloomberg Opinion"
          :isOfficial="true"
          thumbnailUrl="/bestplace.jpg"
          officialAvatarUrl="/brooklyn99.jpg"
        />
        <NewsItem
          title="The “best places to live in the U.S.” don’t live up to the hype"
          timeElapsed="September 1, 2021"
          categoryOrOfficial="Bloomberg Opinion"
          :isOfficial="true"
          thumbnailUrl="/bestplace.jpg"
          officialAvatarUrl="/brooklyn99.jpg"
        />
        <NewsItem
          title="The “best places to live in the U.S.” don’t live up to the hype"
          timeElapsed="September 1, 2021"
          categoryOrOfficial="Bloomberg Opinion"
          :isOfficial="true"
          thumbnailUrl="/bestplace.jpg"
          officialAvatarUrl="/brooklyn99.jpg"
        />
        <NewsItem
          title="The “best places to live in the U.S.” don’t live up to the hype"
          timeElapsed="September 1, 2021"
          categoryOrOfficial="Bloomberg Opinion"
          :isOfficial="true"
          thumbnailUrl="/bestplace.jpg"
          officialAvatarUrl="/brooklyn99.jpg"
        />
        <NewsItem
          title="The “best places to live in the U.S.” don’t live up to the hype"
          timeElapsed="September 1, 2021"
          categoryOrOfficial="Bloomberg Opinion"
          :isOfficial="true"
          thumbnailUrl="/bestplace.jpg"
          officialAvatarUrl="/brooklyn99.jpg"
        />
      </ForYouContentWrapper>
    </section>
    <div class="secondary-seperator"></div>
    <section class="for-you__custom-topic">
      <ForYouContentWrapper title="UX design" :isSuggestedTopic="true">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </ForYouContentWrapper>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExploreBanner from "@/components/ExploreBanner.vue";
import ForYouContentWrapper from "@/components/ForYouContentWrapper.vue";
import TrendItem from "@/components/Sidewall/TrendItem.vue";
import NewsItem from "@/components/NewsItem.vue";
import PostItem from "@/components/PostItem.vue";

export default Vue.extend({
  components: {
    ExploreBanner,
    ForYouContentWrapper,
    TrendItem,
    NewsItem,
    PostItem,
  },
});
</script>

<style lang="sass" scoped>
.for-you
  min-height: 200vh
</style>
