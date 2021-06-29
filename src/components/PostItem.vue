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
            <span>
              <div class="name-n-username">
                <div class="name">
                  <span class="">Suziku Hing</span>
                  <span></span>
                </div>

                <div class="username">
                  <div>
                    <span class="">@someone</span>
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
          </div>
          <div class="post__container__content__right__text"></div>
          <div class="post__container__content__right__actions"></div>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="sass" scoped>
.post
  font-size: 0.875em
  padding: 0 16px
  &__container
    &__action-done
      margin-top: 12px
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
          span
            display: flex
          .name
            font-weight: 700
          .username
            color: rgb(83, 100, 113)

          .name-n-username
            display: flex
            align-items: center
            flex-shrink: 1

            .name
              max-width: 100%

              white-space: nowrap

            .username
              overflow: hidden
              margin-left: 4px
              div
                white-space: nowrap
          .point-n-time
            flex-shrink: 0
            width: fit-content
            .point
              margin: 0 4px
</style>
