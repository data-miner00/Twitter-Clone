<template>
  <article class="post">
    <div class="post__container">
      <div class="post__container__action-done">
        <div class="post__container__action-done__icon" v-if="!!actionDone">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            v-if="actionDone == 'retweeted'"
          >
            <g>
              <path
                fill="currentColor"
                d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"
              ></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            v-else-if="actionDone == 'followed'"
          >
            <g>
              <path
                fill="currentColor"
                d="M12.225 12.165c-1.356 0-2.872-.15-3.84-1.256-.814-.93-1.077-2.368-.805-4.392.38-2.826 2.116-4.513 4.646-4.513s4.267 1.687 4.646 4.513c.272 2.024.008 3.46-.806 4.392-.97 1.106-2.485 1.255-3.84 1.255zm5.849 9.85H6.376c-.663 0-1.25-.28-1.65-.786-.422-.534-.576-1.27-.41-1.968.834-3.53 4.086-5.997 7.908-5.997s7.074 2.466 7.91 5.997c.164.698.01 1.434-.412 1.967-.4.505-.985.785-1.648.785z"
              ></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            v-else-if="actionDone == 'liked'"
          >
            <g>
              <path
                fill="currentColor"
                d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"
              ></path>
            </g>
          </svg>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            v-else-if="actionDone == 'replied'"
          >
            <g>
              <path
                fill="currentColor"
                d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="post__container__action-done__text" v-if="!!actionDone">
          {{ actionText }}
        </div>
      </div>
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
            <div
              class="comment"
              @mouseenter="highlight(0)"
              @mouseleave="unHighlight(0)"
            >
              <div class="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path
                      ref="commentPath"
                      fill="rgb(83, 100, 113)"
                      d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                    ></path>
                  </g>
                </svg>
                <!-- <fa :icon="['far', 'comment']" /> -->
              </div>
              <div class="numbers">
                <div>2K</div>
              </div>
            </div>
            <div
              class="retweet"
              @mouseenter="highlight(1)"
              @mouseleave="unHighlight(1)"
            >
              <div class="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path
                      ref="retweetPath"
                      fill="rgb(83, 100, 113)"
                      d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                    ></path>
                  </g>
                </svg>
                <!-- <fa :icon="['fas', 'retweet']" /> -->
              </div>
              <div class="numbers">
                <div>2K</div>
              </div>
            </div>
            <div
              class="like"
              @mouseenter="highlight(2)"
              @mouseleave="unHighlight(2)"
            >
              <div class="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path
                      ref="likePath"
                      fill="rgb(83, 100, 113)"
                      d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                    ></path>
                  </g>
                </svg>
                <!-- <fa :icon="['far', 'heart']" /> -->
              </div>
              <div class="numbers">
                <div>2K</div>
              </div>
            </div>
            <div
              class="share"
              @mouseenter="highlight(3)"
              @mouseleave="unHighlight(3)"
            >
              <div class="icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path
                      ref="sharePathTop"
                      fill="rgb(83, 100, 113)"
                      d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                    ></path>
                    <path
                      ref="sharePathBtm"
                      fill="rgb(83, 100, 113)"
                      d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                    ></path>
                  </g>
                </svg>
              </div>
              <!-- <fa :icon="['fas', 'share']" /> -->
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
  methods: {
    highlight(iconIndex: number): void {
      if (iconIndex == 0) {
        (this.$refs.commentPath as SVGPathElement).setAttribute(
          "fill",
          "rgb(29, 161, 242)"
        );
      } else if (iconIndex == 1) {
        (this.$refs.retweetPath as SVGPathElement).setAttribute(
          "fill",
          "rgb(23, 191, 99)"
        );
      } else if (iconIndex == 2) {
        (this.$refs.likePath as SVGPathElement).setAttribute(
          "fill",
          "rgb(224, 36, 94)"
        );
      } else {
        (this.$refs.sharePathTop as SVGPathElement).setAttribute(
          "fill",
          "rgb(29, 161, 242)"
        );
        (this.$refs.sharePathBtm as SVGPathElement).setAttribute(
          "fill",
          "rgb(29, 161, 242)"
        );
      }
    },
    unHighlight(iconIndex: number): void {
      if (iconIndex == 0) {
        (this.$refs.commentPath as SVGPathElement).setAttribute(
          "fill",
          "rgb(83, 100, 113)"
        );
      } else if (iconIndex == 1) {
        (this.$refs.retweetPath as SVGPathElement).setAttribute(
          "fill",
          "rgb(83, 100, 113)"
        );
      } else if (iconIndex == 2) {
        (this.$refs.likePath as SVGPathElement).setAttribute(
          "fill",
          "rgb(83, 100, 113)"
        );
      } else {
        (this.$refs.sharePathTop as SVGPathElement).setAttribute(
          "fill",
          "rgb(83, 100, 113)"
        );
        (this.$refs.sharePathBtm as SVGPathElement).setAttribute(
          "fill",
          "rgb(83, 100, 113)"
        );
      }
    },
  },
  computed: {
    actionText(): string {
      switch (this.actionDone) {
        case "retweeted": {
          return "You retweeted";
        }
        case "liked": {
          return "You liked";
        }
        case "tweeted": {
          return "You tweeted";
        }
        case "replied": {
          return "You replied";
        }
        case "followed": {
          return "You followed";
        }
        default: {
          return "hope not called";
        }
      }
    },
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
      color: $post-action-color
      font-size: 13px
      margin-bottom: 4px
      display: flex
      &__icon
        flex-basis: 48px
        margin-right: 12px
        display: flex
        justify-content: flex-end
        svg
          display: block
          height: 15px
      &__text
        font-weight: 700
        line-height: 16px
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
        padding-bottom: 4px
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
          margin-top: 4px
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
              svg
                height: 1em
                width: 1em
          .icon
            font-size: 18px
            padding: 8px
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
          .share
            &:hover
              & .icon
                background: $accent-blue-translucent
</style>
