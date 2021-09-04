<template>
  <div class="trend-item">
    <div class="trend-item__first-row">
      <div class="trend-item__first-row__text">
        <span v-if="trendingByCategory">{{ category }} · Trending</span>
        <span v-else>Trending in {{ country }}</span>
      </div>
      <div class="trend-item__first-row__action-icon">
        <div class="real-icon">
          <div>
            <fa :icon="['fas', 'ellipsis-h']" />
          </div>
        </div>
      </div>
    </div>
    <div class="trend-item__keyword">{{ topicOrHashtag }}</div>
    <div class="trend-item__number-counts">
      {{ tweetCount | simplifyCount }} Tweets
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    //
    country: {
      type: String,
      default: "Malaysia",
    },
    category: {
      type: String,
      default: "Sports",
    },
    trendingByCategory: {
      type: Boolean,
      default: false,
    },
    topicOrHashtag: {
      type: String,
      default: "Pfizer",
    },
    tweetCount: {
      type: Number,
      default: 16990,
    },
  },
  filters: {
    simplifyCount(count: number): string {
      let thousands = count / 1000;
      return thousands.toFixed(1) + "k";
    },
  },
});
</script>

<style lang="sass" scoped>
.trend-item
  padding: 12px 16px
  border-bottom: 1px solid rgb(239, 243, 244)
  transition: background.2s
  cursor: pointer
  &:hover
    background: rgba(0, 0, 0, 0.03)
  &__first-row
    display: flex
    justify-content: space-between
    font-size: 13px
    color: #536471
    max-height: 17px
    &__action-icon
      height: 100%
      .real-icon
        border-radius: 250px
        width: 32px
        height: 32px
        display: flex
        justify-content: center
        align-items: center
        transform: translateY(-5px)
        transition: background .2s, color .2s
        div
          width: fit-content

        &:hover
          background: rgba(29, 161, 242, 0.1)
          color: rgb(29, 161, 242)
  &__keyword
    padding-top: 2px
    font-size: 15px
    font-weight: 700
  &__number-counts
    margin-top: 4px
    font-size: 13px
    color: #536471
</style>
