<template>
  <div class="noti-sys-item">
    <article>
      <div class="noti-sys-item__inner">
        <div class="noti-sys-item__left">
          <svg viewBox="0 0 24 24" aria-hidden="true" width="30" height="30">
            <g>
              <path
                d="M12 1.75c-.138 0-.276.038-.398.114-.044.028-4.515 2.8-9.21 3.494-.362.053-.632.358-.642.723-.003.118-.188 11.742 9.938 16.353.1.045.206.067.312.067V1.75z"
                fill="#1DA1F2"
              ></path>
              <path
                d="M12 1.75c.138 0 .276.038.398.114.044.028 4.515 2.8 9.21 3.494.362.053.632.358.64.723.004.118.19 11.742-9.937 16.353-.098.045-.204.067-.31.067V1.75z"
                fill="#78C6EE"
              ></path>
            </g>
          </svg>
        </div>
        <div class="noti-sys-item__right">
          <span>An update on the account you reported is available</span>
        </div>
        <div class="noti-sys-item__options">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g fill="currentColor">
              <circle cx="5" cy="12" r="2"></circle>
              <circle cx="12" cy="12" r="2"></circle>
              <circle cx="19" cy="12" r="2"></circle>
            </g>
          </svg>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="sass" scoped>
@import "../assets/sass/_variables"

.noti-sys-item
  transition: background .2s
  border-bottom: 1px solid #eee
  cursor: pointer
  article
    padding: 12px 16px
  &__inner
    display: flex
    align-items: center
    position: relative
  &__left
    flex-basis: 48px
    display: flex
    justify-content: flex-end
    margin-right: 12px
    svg
      display: block

  &__right
    font-weight: 400
    font-size: 15px
    line-height: 20px
    flex-grow: 1

  &__options
    position: absolute
    top: 0
    right: 0
    padding: 8px
    height: calc( 1.25em + 16px )
    border-radius: 999px
    transition: background .2s
    cursor: pointer
    &:hover
      color: $accent-blue
      background: $accent-blue-translucent
    svg
      width: 1.25em
      height: 1.25em
  &:hover
    background: rgba(0, 0, 0, 0.03)
</style>
