<template>
  <div class="media">
    <div class="media__no-content">
      <div class="media__no-content__heading">
        <span>You haven't Tweeted any photos or videos yet</span>
      </div>
      <div class="media__no-content__description">
        <span>
          When you send Tweets with photos or videos in them, it will show up
          here.
        </span>
      </div>
      <div class="media__no-content__tweet-btn">
        <div class="media__no-content__tweet-btn__inner">
          <span> Tweet a photo or video </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"

.media
  display: flex
  &__no-content
    margin: 32px auto
    padding: 0 32px
    align-self: center
    max-width: calc(400px)
    display: flex
    flex-direction: column
    align-items: baseline
    &__heading
      margin-bottom: 8px
      line-height: 36px
      font-size: 31px
      font-weight: 800
      color: $font-default-v2
      span
        overflow-wrap: break-word
    &__description
      margin-bottom: 28px
      color: $post-action-color
      font-size: 15px
      line-height: 20px
      overflow-wrap: break-word
    &__tweet-btn
      background: $twitter-purple
      transition: .2s background-color, .2s box-shadow
      cursor: pointer
      padding: 0 32px
      border: 1px solid white
      border-radius: 9999px
      min-width: 52px
      min-height: 52px
      display: flex
      &__inner
        margin: auto 0
        span
          color: white
          font-weight: 700
          font-size: 17px
          line-height: 20px
          overflow-wrap: break-word
</style>
