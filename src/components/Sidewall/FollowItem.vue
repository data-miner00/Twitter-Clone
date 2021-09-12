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
        <FollowButton />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FollowButton from "../FollowButton.vue";

export default Vue.extend({
  props: {
    //
  },
  components: {
    FollowButton,
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
</style>
