<template>
  <div class="content-wrapper">
    <div class="content-wrapper__title">
      <div class="content-wrapper__title__text">
        <div class="content-wrapper__title__text__icon" v-if="isSuggestedTopic">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
            <g>
              <path
                fill="rgb(120, 86, 255)"
                d="M18.265 3.314c-3.45-3.45-9.07-3.45-12.52 0-3.45 3.44-3.45 9.06 0 12.51 1.5 1.49 3.43 2.38 5.51 2.56v4.14c0 .31.2.6.5.7.08.03.17.05.25.05.22 0 .44-.1.59-.29l6.49-8.11c2.63-3.49 2.27-8.47-.82-11.56zm-10.56 7.87c0-.41.33-.75.75-.75h4.05c.41 0 .75.34.75.75s-.34.75-.75.75h-4.05c-.42 0-.75-.34-.75-.75zm8.6-3.24c0 .42-.34.75-.75.75h-7.1c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h7.1c.41 0 .75.34.75.75z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="content-wrapper__title__text__text">
          <span>{{ title }}</span>
        </div>
      </div>
    </div>
    <div class="content-wrapper__content">
      <slot />
    </div>
    <div class="follow-topic" v-if="isSuggestedTopic">
      <div class="follow-topic__left">
        <div class="follow-topic__left__icon">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
            <g>
              <path
                fill="rgb(255, 255, 255)"
                d="M18.265 3.314c-3.45-3.45-9.07-3.45-12.52 0-3.45 3.44-3.45 9.06 0 12.51 1.5 1.49 3.43 2.38 5.51 2.56v4.14c0 .31.2.6.5.7.08.03.17.05.25.05.22 0 .44-.1.59-.29l6.49-8.11c2.63-3.49 2.27-8.47-.82-11.56zm-10.56 7.87c0-.41.33-.75.75-.75h4.05c.41 0 .75.34.75.75s-.34.75-.75.75h-4.05c-.42 0-.75-.34-.75-.75zm8.6-3.24c0 .42-.34.75-.75.75h-7.1c-.42 0-.75-.33-.75-.75 0-.41.33-.75.75-.75h7.1c.41 0 .75.34.75.75z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="follow-topic__left__main">
          <div class="follow-topic__left__main__topic">{{ title }}</div>
          <div class="follow-topic__left__main__category">{{ category }}</div>
        </div>
      </div>
      <div class="follow-topic__right">
        <FollowButton />
      </div>
    </div>
    <ShowMore v-else-if="!isSuggestedTopic && hasShowMoreBtn" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ShowMore from "@/components/Sidewall/ShowMore.vue";
import FollowButton from "./FollowButton.vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: "UX Design",
    },
    isSuggestedTopic: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      default: "Computer Programming",
    },
    hasShowMoreBtn: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    ShowMore,
    FollowButton,
  },
});
</script>

<style lang="sass" scoped>
.content-wrapper
  &__title
    padding: 12px 16px
    &__text
      font-weight: 800
      line-height: 24px
      font-size: 20px
      color: rgb(15, 20, 25)
      display: flex
      align-items: center
      &__icon
        height: 20px
        margin-top: 2px
        padding-right: 12px
        .icon
          height: 23px
          width: 23px
.follow-topic
  cursor: pointer
  padding: 12px 16px
  display: flex
  justify-content: space-between
  align-items: center
  transition: .2s background
  &:hover
    background: rgba(0,0,0,0.03)
  &__left
    display: flex
    &__icon
      height: 28px
      width: 28px
      border-radius: 999px
      background-color: rgb(120, 86, 255)
      overflow: hidden
      display: flex
      justify-content: center
      align-items: center
      margin-right: 12px
      svg
        height: 16px
        width: 16px
        user-select: none
        display: inline-block
    &__main
      flex-shrink: 1
      &__topic
        font-weight: 800
        font-size: 15px
        line-height: 20px
        &:hover
          text-decoration: underline
      &__category
        color: rgb(83, 100, 113)
</style>
