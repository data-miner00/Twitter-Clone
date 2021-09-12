<template>
  <div class="sports-item">
    <div class="sports-item__inner">
      <div class="sports-item__inner__header">
        <div class="sports-item__inner__header__left">{{ event }}</div>
        <div class="sports-item__inner__header__right">
          <span class="label" :class="{ live: isLive }">{{ label }}</span> ·
          <span class="result">{{ result }}</span>
        </div>
      </div>
      <div class="sports-item__inner__content">
        <div
          class="sports-item__inner__content__team"
          :style="`background-color: ${team1.backgroundColor}`"
        >
          <div class="sports-item__inner__content__team__inner">
            <div class="avatar">
              <img :src="team1.avatarUrl" :alt="team1.avatarAlt" />
            </div>
            <div class="name">{{ team1.name }}</div>
            <div class="score">{{ team1.score }}</div>
          </div>
        </div>
        <div
          class="sports-item__inner__content__team"
          :style="`background-color: ${team2.backgroundColor}`"
        >
          <div class="sports-item__inner__content__team__inner">
            <div class="avatar">
              <img :src="team2.avatarUrl" :alt="team2.avatarAlt" />
            </div>
            <div class="name">{{ team2.name }}</div>
            <div class="score">{{ team2.score }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    event: {
      type: String,
      default: "MLB",
    },
    label: {
      type: String,
      default: "Final",
    },
    result: {
      type: String,
      default: "SF won",
    },
    team1: {
      type: Object,
      default: () => ({
        avatarUrl: "/SF.png",
        avatarAlt: "san francisco giants",
        name: "San Francisco Giants",
        score: 6,
        backgroundColor: "rgb(253, 90, 30)",
      }),
    },
    team2: {
      type: Object,
      default: () => ({
        avatarUrl: "/CHC.png",
        avatarAlt: "chicago cubs",
        name: "Chicago Cubs",
        score: 1,
        backgroundColor: "rgb(14, 51, 134)",
      }),
    },
  },
  computed: {
    isLive(): boolean {
      return this.label == "Live";
    },
  },
});
</script>

<style lang="sass" scoped>
.sports-item
  padding: 4px 16px 12px
  cursor: pointer
  &:hover
    background: rgba(0, 0, 0, 0.03)
  &__inner
    height: 124px
    &__header
      font-size: 13px
      display: flex
      align-items: center
      justify-content: space-between
      margin: 4px 0
      &__left
        font-weight: 700
      &__right
        color: #536471
        .label
          font-weight: 700
          &.live
            color: rgb(249, 24, 128)
    &__content
      border-radius: 4px
      overflow: hidden
      &__team
        height: 48px
        padding: 0 12px
        color: white
        &__inner
          display: flex
          height: 100%
          .avatar
            width: 40px
            align-self: center
            img
              width: 40px
          .name
            flex-grow: 1
            padding: 0 12px
            line-height: 20px
            font-size: 15px
            font-weight: 800
            align-self: center
          .score
            font-size: 23px
            font-weight: 800
            line-height: 28px
            align-self: center
            margin: 0 12px
            &.lose
              opacity: .5
</style>
