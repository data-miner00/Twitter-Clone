<template>
  <div class="news">
    <section class="news__banner">
      <ExploreBanner
        category="Economy"
        timeElapsed="September 2, 2021"
        title="US university students face back-to-campus vaccine mandates"
        backgroundImageUrl="/yale.webp"
        :isLiveStyle="false"
      />
    </section>
    <div class="secondary-seperator"></div>
    <section class="news__news">
      <NewsItem
        title="Zoo animals did not escape amid flooding in South Orange, New Jersey,
          according to local officials"
        timeElapsed="47 minutes ago"
        categoryOrOfficial="US national news"
        :isOfficial="false"
        thumbnailUrl="/brooklyn99.jpg"
        officialAvatarUrl="/brooklyn99.jpg"
      />
      <NewsItem
        title="The “best places to live in the U.S.” don’t live up to the hype"
        timeElapsed="September 1, 2021"
        categoryOrOfficial="Bloomberg Opinion"
        :isOfficial="true"
        thumbnailUrl="/bestplace.jpg"
        officialAvatarUrl="/bo.jpg"
      />
      <NewsItem
        title='During Covid-19, "traveling" nurses can make $5,000 or more a week'
        timeElapsed="4 hours ago"
        categoryOrOfficial="Quartz"
        :isOfficial="true"
        thumbnailUrl="/nurses.jpg"
        officialAvatarUrl="/quartz_profile.jpg"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExploreBanner from "@/components/ExploreBanner.vue";
import NewsItem from "@/components/NewsItem.vue";
export default Vue.extend({
  components: {
    ExploreBanner,
    NewsItem,
  },
});
</script>
