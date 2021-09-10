<template>
  <div class="sports-item">
    <div class="sports-item__inner">
      <div class="sports-item__inner__header">
        <div class="sports-item__inner__header__left">MLB</div>
        <div class="sports-item__inner__header__right">
          <span class="label">Final</span> ·
          <span class="result">SF won</span>
        </div>
      </div>
      <div class="sports-item__inner__content">
        <div
          class="sports-item__inner__content__team"
          style="background-color: rgb(253, 90, 30)"
        >
          <div class="sports-item__inner__content__team__inner">
            <div class="avatar">
              <img src="/SF.png" alt="sf" />
            </div>
            <div class="name">Sans Francisco Giants</div>
            <div class="score">6</div>
          </div>
        </div>
        <div
          class="sports-item__inner__content__team"
          style="background-color: rgb(14, 51, 134)"
        >
          <div class="sports-item__inner__content__team__inner">
            <div class="avatar">
              <img src="/CHC.png" alt="chc" />
            </div>
            <div class="name">Chicago Cubs</div>
            <div class="score lose">1</div>
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
    //
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
