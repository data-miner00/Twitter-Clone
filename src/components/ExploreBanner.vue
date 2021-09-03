<template>
  <div class="explore-banner">
    <div class="explore-banner__bg" ref="exploreBanner">
      <div class="explore-banner__text">
        <div class="explore-banner__text__top">
          <div class="weather">{{ category }}</div>
          <div class="dot">·</div>
          <div class="time-elapsed" :class="{ live: isLiveStyle }">
            <div>{{ timeElapsed }}</div>
          </div>
        </div>
        <div class="explore-banner__text__bottom">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    category: String,
    timeElapsed: String,
    title: String,
    backgroundImageUrl: String,
    isLiveStyle: Boolean,
  },
  mounted(): void {
    (
      this.$refs.exploreBanner as HTMLDivElement
    ).style.backgroundImage = `url(${this.backgroundImageUrl}`;
  },
});
</script>

<style lang="sass" scoped>
.explore-banner
  &__bg
    background: #eee
    height: 340px
    position: relative
    z-index: -1
  &__text
    color: white
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 340px
    background: linear-gradient(transparent 0%, transparent 25%, rgba(0, 0, 0, 0.7) 75%, rgba(0, 0, 0, 0.8) 100%)
    padding: 12px 16px
    display: flex
    flex-direction: column
    justify-content: flex-end

    &__top
      display: flex
      align-items: center
      .weather
        font-size: 13px
      .dot
        font-size: 15px
        line-height: 20px
        padding: 0 4px
      .time-elapsed
        font-size: 13px
        &.live
          border-radius: 4px
          height: 20px
          background-color: rgb(249, 24, 128)
          padding: 0 4px
          display: flex
          align-items: center
          div

            line-height: 16px
            font-weight: 700
    &__bottom
      overflow-wrap: break-word
      line-height: 28px
      font-size: 23px
      font-weight: 800
      margin: 2px 0
</style>
