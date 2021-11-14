<template>
  <div class="wrapper">
    <div class="inner-wrap">
      <div class="topic-suggestion">
        <div class="topic-suggestion__left">
          <div class="topic-suggestion__left__topic">
            <span>World news</span>
          </div>
          <!-- + icon -->
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <g>
              <path
                d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="topic-suggestion__right">
          <div>
            <!-- x icon -->
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <g>
                <path
                  d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-direction: column
  min-width: 222px
  margin: 4px
  cursor: pointer
.inner-wrap
  display: flex
  flex-direction: column
.topic-suggestion
  display: flex
  min-height: 40px
  text-overflow: ellipsis
  background-color: white
  border: 1px solid rgb(207, 217, 222)
  overflow: hidden
  border-radius: 9999px
  &__left
    flex: 1 1 auto
    display: flex
    justify-content: space-between
    align-items: center
    padding-right: 12px
    padding-left: 16px
    transition: background .2s
    &:hover
      background: rgba(29, 155, 240, 0.1)
    &__topic
      font-weight: 700
      font-size: 15px
      line-height: 20px
      overflow-wrap: break-word
      width: 100%
      user-select: none
      max-width: 100%
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
    svg
      display: inline-block
      margin-left: 12px
      flex-shrink: 0
      color: rgb(29, 155, 240)
      user-select: none
      max-width: 100%
      height: 1.25em
      fill: currentColor
  &__right
    display: flex
    justify-content: center
    align-items: center
    transition: background .2s
    &:hover
      background: rgba(29, 155, 240, 0.1)
    div
      display: flex
      border-left: 1px solid rgb(239, 243, 244)
      padding: 0 12px
      svg
        display: inline-block
        height: 1.25em
        color: rgb(185, 202, 211)
        fill: currentColor
        max-width: 100%
</style>
