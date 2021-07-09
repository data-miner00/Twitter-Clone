<template>
  <div class="sidewall">
    <div class="sidewall__dummy"></div>
    <div class="sidewall__wrap">
      <div class="sidewall__search-box">
        <div class="sidewall__search-box__search-icon">
          <div>
            <fa :icon="['fas', 'search']" />
          </div>
        </div>
        <div class="sidewall__search-box__input">
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>
    </div>
    <div class="sidewall__trends">
      <SectionTitle text="Trends for you" />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <ShowMore />
    </div>
    <div class="sidewall__follow">
      <SectionTitle text="Who to follow" />
      <FollowItem />
      <FollowItem />
      <ShowMore />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SectionTitle from "./SectionTitle.vue";
import TrendItem from "./TrendItem.vue";
import ShowMore from "./ShowMore.vue";
import FollowItem from "./FollowItem.vue";

export default Vue.extend({
  components: {
    SectionTitle,
    TrendItem,
    ShowMore,
    FollowItem,
  },
});
</script>

<style lang="sass" scoped>
.sidewall
  &__dummy
    height: 53px
  &__wrap
    padding: 4px 0px 2px 0
    position: fixed
    top: 0
    height: 53px
    width: 350px
    background: white
    z-index: 99
  &__search-box
    display: flex
    background: rgb(239, 243, 244)
    align-items: center
    border-radius: 250px
    color: #536471
    &__search-icon
      width: 35px
      height: 30px
      display: flex
      justify-content: flex-end
      align-items: center
      font-size: 1em
      margin-right: 10px
      div
        width: fit-content
    &__input
      background: transparent
      flex-grow: 1
      input
        background: transparent
        line-height: 20px
        font-size: 15px
        padding: 12px
        border: none
        width: 100%
  &__trends,
  &__follow
    border-radius: 16px
    background: #f7f9f9
    margin-top: 20px
    overflow: hidden
</style>
