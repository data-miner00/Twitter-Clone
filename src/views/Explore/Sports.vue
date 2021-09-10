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
    <div class="secondary-seperator"></div>
    <section class="sports__news">
      <NewsItem
        title="England draw 1-1 with Poland in World Cup qualifiers"
        timeElapsed="September 9, 2021"
        categoryOrOfficial="Soccer"
        :isOfficial="false"
        thumbnailUrl="/soccer.jpg"
      />
      <SportsItem />
      <SportsItem />
      <NewsItem
        title="Will NHL players be at the Beijing Olympics? It’s still not a sure thing yet"
        timeElapsed="September 9, 2021"
        categoryOrOfficial="Toronto Star"
        :isOfficial="true"
        thumbnailUrl="/snow.jpg"
        officialAvatarUrl="/torontostar.jpg"
      />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ExploreBanner from "@/components/ExploreBanner.vue";
import SportsItem from "@/components/SportsItem.vue";
import NewsItem from "@/components/NewsItem.vue";

export default Vue.extend({
  components: {
    ExploreBanner,
    SportsItem,
    NewsItem,
  },
});
</script>
