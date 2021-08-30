<template>
  <div class="for-you">
    <section class="for-you__banner">
      <div class="for-you__banner__bg">
        <div class="for-you__banner__text">
          <div class="for-you__banner__text__top">
            <div class="weather">Weather</div>
            <div class="dot">·</div>
            <div class="live">
              <div>Live</div>
            </div>
          </div>
          <div class="for-you__banner__text__bottom">
            Hurricane Ida hits Louisiana as Category 4 storm
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="sass" scoped>
.for-you
  &__banner
    padding-top: 3px
    &__bg
      background: #eee
      height: 340px
      background-image: url("/cloud.jpeg")
      position: relative
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
        .live
          border-radius: 4px
          height: 20px
          background-color: rgb(249, 24, 128)
          padding: 0 4px
          display: flex
          align-items: center
          div
            font-size: 13px
            line-height: 16px
            font-weight: 700
            text-transform: uppercase
      &__bottom
        overflow-wrap: break-word
        line-height: 28px
        font-size: 23px
        font-weight: 800
        margin: 2px 0
</style>
