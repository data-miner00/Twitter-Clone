<template>
  <div class="diitem">
    <div class="diitem__img">
      <!-- <img src="/green_smol.png" alt="list image"> -->
    </div>
    <div class="diitem__content">
      <div class="diitem__content__list">
        <div class="diitem__content__list__name">Amicus Curiae</div>
        <div class="diitem__content__list__user">
          <div class="diitem__content__list__user__avatar"></div>
          <div class="diitem__content__list__user__name">Imaran 🚗🚓</div>
          <div class="diitem__content__list__user__username">@imimrannot</div>
        </div>
      </div>
      <div class="diitem__content__follow-btn">
        <FollowButton />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FollowButton from "./FollowButton.vue";
export default Vue.extend({
  components: { FollowButton },
});
</script>

<style lang="sass" scoped>
.diitem
  padding: 12px 16px
  display: flex
  border-bottom: 1px solid rgb(239, 243, 244)
  transition: background .2s
  cursor: pointer
  &:hover
    background: rgba(0, 0, 0, 0.03)
  &__img
    height: 48px
    width: 48px
    overflow: hidden
    border-radius: 12px
    margin-right: 16px
    background-image: url(/green_smol.png)
    background-position: center center
    background-size: cover
  &__content
    flex-grow: 1
    display: flex
    align-items: center
    justify-content: space-between
    &__list
      flex-shrink: 1
      font-size: 15px
      &__name
        font-weight: 700
      &__user
        display: flex
        align-items: center
        font-size: 13px
        &__avatar
          width: 16px
          height: 16px
          margin-right: 4px
          border-radius: 999px
          background-color: gray
          margin-right: 4px
        &__name
          font-weight: 700
          margin-right: 4px
        &__username
          color: rgb(83, 100, 113)
</style>
