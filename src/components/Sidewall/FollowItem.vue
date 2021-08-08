<template>
  <div class="follow-item">
    <div class="follow-item__avatar">
      <img src="/default_profile_bigger.png" alt="profile pic" />
    </div>
    <div class="follow-item__content">
      <div class="follow-item__content__usernames">
        <div class="follow-item__content__usernames__name">Faline San</div>
        <div class="follow-item__content__usernames__username">@faline123</div>
      </div>
      <div class="follow-item__content__follow-btn">
        <div class="follow-item__content__follow-btn__actual-btn">
          <div>
            <span>Follow</span>
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
.follow-item
  padding: 12px 16px
  display: flex
  border-bottom: 1px solid rgb(239, 243, 244)
  transition: background .2s
  cursor: pointer
  &:hover
    background: rgba(0, 0, 0, 0.03)
  &__avatar
    height: 48px
    width: 48px
    overflow: hidden
    border-radius: 250px
    margin-right: 12px
    img
      height: 48px
  &__content
    flex-grow: 1
    display: flex
    align-items: center
    justify-content: space-between
    &__usernames
      flex-shrink: 1
      font-size: 15px
      &__name
        font-weight: 700
      &__username
        color: #536471

    &__follow-btn

      // WARNING: Repeated codes below
      &__actual-btn
        min-height: 32px
        min-width: 79px
        border-radius: 250px
        border: 1px solid rgb(121, 75, 196)
        color: rgb(121, 75, 196)
        display: flex
        justify-content: center
        align-items: center
        font-weight: 700
        transition: background .2s
        &:hover
          background: rgba(121, 75, 196, .1)
        div
          width: fit-content
</style>
