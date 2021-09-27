<template>
  <div class="profile">
    <div class="profile__info">
      <div class="profile__info__banner">
        <div class="profile__info__banner__back"></div>
        <div class="profile__info__banner__overlay"></div>
      </div>
      <div class="profile__info__details">
        <div class="profile__info__details__1">
          <div class="profile__info__details__1__avatar">
            <div class="profile__info__details__1__avatar__inner">
              <div></div>
            </div>
          </div>
          <div class="profile__info__details__1__edit-btn">Edit profile</div>
        </div>
        <div class="profile__info__details__2">
          <div class="profile__info__details__2__name">Has</div>
          <div class="profile__info__details__2__username">@has922cdj</div>
        </div>
        <div class="profile__info__details__3">I Programmer</div>
        <div class="profile__info__details__4">Joined April 2020</div>
        <div class="profile__info__details__5">
          <div><span>248</span> Following</div>
          <div><span>5</span> Followers</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  //
});
</script>

<style lang="sass" scoped>
.profile
  width: 600px
  &__info
    &__banner
      position: relative
      &__back
        width: 100%
        padding-bottom: 33.33%
      &__overlay
        position: absolute
        top: 0
        left: 0
        bottom: 0
        width: 100%
        background: rgb(207, 217, 222)
    &__details
      margin-bottom: 16px
      padding: 12px 16px 0
      &__1
        display: flex
        justify-content: space-between
        &__avatar
          margin-left: -4px
          margin-bottom: -4px
          width: 25%
          border-radius: 999px
          margin-top: -17%
          overflow: hidden
          // display: grid
          // place-items: center
          &__inner
            position: relative
            width: 100%
            height: 100%
            background: #fff
            padding: 5px
            div
              background: rgb(207, 217, 222)
              background: url("/avatar2.jpg")
              background-size: cover
              background-repeat: no-repeat
              border-radius: 999px
              height: 100%
              width: 100%
        &__edit-btn
          margin-bottom: 12px
          font-weight: 700
          font-size: 15px
          border: 1px solid rgb(121, 75, 196)
          line-height: 20px
          border-radius: 999px
          cursor: pointer
          padding: 6px 14px
          color: rgb(121, 75, 196)
</style>
