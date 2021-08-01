<template>
  <article class="post">
    <div class="post__container">
      <div class="post__container__action-done"></div>
      <div class="post__container__content">
        <div class="post__container__content__left">
          <div class="post__container__content__left__avatar">
            <img
              src="http://localhost:8080/default_profile_bigger.png"
              alt="profile pic"
            />
          </div>
        </div>
        <div class="post__container__content__right">
          <div class="post__container__content__right__top">
            <span class="the-left">
              <div class="name-n-username">
                <div class="name">
                  <span class="">Suziku Hing</span>
                  <span></span>
                </div>
                <div class="username">
                  <div>
                    <span class="">@someongggge</span>
                  </div>
                </div>
              </div>
              <div class="point-n-time">
                <div class="point">
                  <span>·</span>
                </div>
                <div class="time">
                  <span>4d</span>
                </div>
              </div>
            </span>
            <div class="option">
              <fa icon="ellipsis-h" />
            </div>
          </div>
          <div class="post__container__content__right__text">
            <div class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              fugit, nihil voluptas ipsa laudantium delectus id quas rem rerum
              voluptatem esse voluptatum dolor itaque aut eaque debitis modi
              quasi ab.
            </div>
          </div>
          <div class="post__container__content__right__image">
            <div></div>
          </div>
          <div class="post__container__content__right__actions">
            <div class="comment">
              <div class="icon">
                <fa :icon="['far', 'comment']" />
              </div>
              <div class="numbers">
                <div>2K</div>
              </div>
            </div>
            <div class="retweet">
              <div class="icon">
                <fa :icon="['fas', 'retweet']" />
              </div>
              <div class="numbers">
                <div>2K</div>
              </div>
            </div>
            <div class="like">
              <div class="icon">
                <fa :icon="['far', 'heart']" />
              </div>
              <div class="numbers">
                <div>2K</div>
              </div>
            </div>
            <div class="share">
              <fa :icon="['fas', 'share']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    name: String,
    username: String,
    postedAt: String,
    imageUrl: String,
    commentCount: Number,
    retweetCount: Number,
    loveCount: Number,
    actionDone: String,
    actionIcon: String,
  },
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"
.post
  padding: 0 16px
  border-bottom: 1px solid #eee
  transition: background 0.2s
  cursor: pointer
  background: white
  &:hover
    background: rgba(0, 0, 0, 0.03)
  &__container
    &__action-done
      padding-top: 12px
    &__content
      display: flex
      &__left
        flex-basis: 48px
        flex-grow: 0
        margin-right: 12px
        height: 100%
        &__avatar
          height: 48px
          width: 48px
          border-radius: 999px
          overflow: hidden
          img
            height: 48px
            width: 48px
      &__right
        flex-grow: 1
        padding-bottom: 2px
        &__top

          display: flex
          justify-content: space-between
          margin-bottom: 2px
          .the-left
            flex-shrink: 1
            display: flex
          .name
            font-weight: 700
          .username
            color: rgb(83, 100, 113)

          .time
            color: rgb(83, 100, 113)

          .name-n-username
            display: flex
            align-items: center
            flex-shrink: 1

            .name
              flex-shrink: 0

              white-space: nowrap

            .username
              flex-shrink: 1
              overflow: hidden
              margin-left: 4px
              div
                white-space: nowrap
          .point-n-time
            flex-shrink: 0
            width: fit-content
            display: flex
            .point
              padding: 0 4px
          .option
            flex-shrink: 0
            color: rgb(83, 100, 113)
        &__text
          .paragraph

            line-height: 20px
            overflow-wrap: break-word
        &__image
          margin-top: 12px
          div
            border-radius: 15px
            border: 1px solid #eee
            background: url("http://localhost:8080/referpic.jpg")
            background-size: cover
            background-position: center
            background-repeat: no-repeat
            padding-top: 52.3333%
            width: 100%

        &__actions
          margin-top: 2px
          display: flex
          justify-content: space-between
          color: rgb(83, 100, 113)
          line-height: 20px
          max-width: 425px
          div
            width: fit-content
            display: flex
            align-items: center
            transition: .1s color ease, .1s background ease
          .icon
            font-size: 18px
            padding: 12px
            border-radius: 250px

          .numbers
            font-size: 13px
            padding: 0 12px

          .comment
            &:hover
              & .icon
                background: $accent-blue-translucent
                color: $accent-blue
              & .numbers
                color: $accent-blue
          .retweet
            &:hover
              & .icon
                background: $accent-green-translucent
                color: $accent-green
              & .numbers
                color: $accent-green
          .like
            &:hover
              & .icon
                background: $accent-red-translucent
                color: $accent-red
              & .numbers
                color: $accent-red
</style>
