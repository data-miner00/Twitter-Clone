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

<style lang="sass" scoped>
.post
  padding: 0 16px
  border-bottom: 1px solid #eee
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
        padding-bottom: 12px
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
        &__actions
          margin-top: 12px
          display: flex
          justify-content: space-between
          color: rgb(83, 100, 113)
          line-height: 20px
          div
            width: fit-content
            display: flex
          .icon
            font-size: 18px

          .numbers
            padding: 0 12px
</style>
