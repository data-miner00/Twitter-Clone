<template>
  <div class="news-item">
    <div class="news-item__wrapper">
      <div class="news-item__wrapper__left">
        <div class="news-item__wrapper__left__top">
          <div
            class="news-item__wrapper__left__top__category"
            :class="{ official: isOfficial }"
          >
            <div class="avatar" v-if="isOfficial">
              <img :src="officialAvatarUrl" alt="official avatar" />
            </div>
            <div class="aside">
              <span>{{ categoryOrOfficial }}</span>
              <svg
                viewBox="0 0 24 24"
                class="verified"
                aria-label="Verified account"
                v-if="isOfficial"
              >
                <g>
                  <path
                    fill="rgb(29, 155, 240)"
                    d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div class="news-item__wrapper__left__top__dot">·</div>
          <div class="news-item__wrapper__left__top__time-elapsed">
            {{ timeElapsed }}
          </div>
        </div>
        <div class="news-item__wrapper__left__mid">
          {{ title }}
        </div>
      </div>
      <div class="news-item__wrapper__right">
        <div class="news-item__wrapper__right__thumbnail">
          <img :src="thumbnailUrl" alt="brooklyn" />
        </div>
      </div>
    </div>
  </div>
</template>

<!-- timeElapsed: This morning, This afternoon, Just now, Yesterday, -->

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    categoryOrOfficial: String,
    officialAvatarUrl: {
      type: String,
      default: "/quartz_profile.jpg",
    },
    timeElapsed: String,
    title: String,
    isOfficial: Boolean,
    thumbnailUrl: {
      type: String,
      default: "/brooklyn99.jpg",
    },
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"
.news-item
  padding: 12px 16px
  transition: background .2s ease
  cursor: pointer
  &:hover
    background: rgba(0, 0, 0, 0.03)
  &__wrapper
    display: flex
    justify-content: space-between
    &__left
      &__top
        display: flex
        align-items: center
        font-size: 13px
        color: #536471
        &__category
          display: flex
          align-items: center
          .aside
            &.official
              font-weight: 700
              color: $font-color
            .verified
              color: rgb(29, 155, 240) !important
              max-width: 20px
              max-height: 20px
              margin-left: 2px
              vertical-align: text-bottom
              height: 1.25em
          .avatar
            height: 16px
            width: 16px
            border-radius: 999px
            overflow: hidden
            display: inline-block
            margin-right: 4px
            img
              height: 16px
              width: 16px
        &__dot
          padding: 0 4px
      &__mid
        font-weight: 700
        margin: 2px 0

    &__right
      &__thumbnail
        border-radius: 15px
        overflow: hidden
        height: 85px
        width: 85px
        img
          object-fit: fill
          object-position: center
</style>
