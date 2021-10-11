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
        <div class="profile__info__details__4">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g fill="currentColor">
              <path
                d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"
              ></path>
              <circle cx="7.032" cy="8.75" r="1.285"></circle>
              <circle cx="7.032" cy="13.156" r="1.285"></circle>
              <circle cx="16.968" cy="8.75" r="1.285"></circle>
              <circle cx="16.968" cy="13.156" r="1.285"></circle>
              <circle cx="12" cy="8.75" r="1.285"></circle>
              <circle cx="12" cy="13.156" r="1.285"></circle>
              <circle cx="7.032" cy="17.486" r="1.285"></circle>
              <circle cx="12" cy="17.486" r="1.285"></circle>
            </g>
          </svg>
          <span>Joined April 2020</span>
        </div>
        <div class="profile__info__details__5">
          <div><span>248</span> Following</div>
          <div><span>5</span> Followers</div>
        </div>
      </div>
    </div>
    <div class="profile__pages">
      <div class="profile__pages__tabs">
        <router-link
          class="profile__pages__tabs__tweets"
          :to="{ name: 'profile-tweets' }"
          exact-active-class="active"
          ><div><span>Tweets</span></div></router-link
        >
        <router-link
          class="profile__pages__tabs__tweets-replies"
          :to="{ name: 'tweets-and-replies' }"
          exact-active-class="active"
          ><div><span>Tweets &amp; replies</span></div></router-link
        >
        <router-link
          class="profile__pages__tabs__media"
          :to="{ name: 'media' }"
          exact-active-class="active"
          ><div><span>Media</span></div></router-link
        >
        <router-link
          class="profile__pages__tabs__likes"
          :to="{ name: 'likes' }"
          exact-active-class="active"
          ><div><span>Likes</span></div></router-link
        >
      </div>
      <div class="profile__pages__views">
        <router-view />
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
@import "../../assets/sass/_variables"

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
      &__2
        margin: 4px 0 12px
        &__name
          font-weight: 800
          font-size: 20px
          line-height: 24px
        &__username
          color: rgb(83, 100, 113)
          font-size: 15px
      &__3
        margin-bottom: 12px
      &__4
        color: rgb(83, 100, 113)
        display: flex
        align-items: center
        margin-bottom: 12px
        svg
          width: 20px
          display: block
        span
          display: block
          margin-left: 5px
      &__5
        display: flex
        color: rgb(83, 100, 113)
        div:first-child
          margin-right: 20px
        span
          font-weight: 700
          color: black
  &__pages
    &__tabs
      display: flex
      border-bottom: 1px solid #eee
      & > *
        flex-grow: 1
        padding: 16px
        display: flex
        justify-content: center
        align-items: center
        transition: background .2s ease
        span
          color: $post-action-color
          font-weight: 700
          padding: 16px 0

        &:hover
          background: $background-gray-hover
        &.active span
          font-weight: 700
          color: $twitter-purple
          border-bottom: 3px solid $twitter-purple
</style>
