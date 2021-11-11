<template>
  <div class="promoted-trend-item">
    <div class="promoted-trend-item__name">
      <span>#FPXOnlineBanking</span>
    </div>
    <div class="promoted-trend-item__description">
      <span
        >Shop online and check out your cart with FPX to enjoy secure
        payments.</span
      >
    </div>
    <div class="promoted-trend-item__by">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g>
          <path
            d="M20.75 2H3.25C2.007 2 1 3.007 1 4.25v15.5C1 20.993 2.007 22 3.25 22h17.5c1.243 0 2.25-1.007 2.25-2.25V4.25C23 3.007 21.993 2 20.75 2zM17.5 13.504c0 .483-.392.875-.875.875s-.875-.393-.875-.876V9.967l-7.547 7.546c-.17.17-.395.256-.62.256s-.447-.086-.618-.257c-.342-.342-.342-.896 0-1.237l7.547-7.547h-3.54c-.482 0-.874-.393-.874-.876s.392-.875.875-.875h5.65c.483 0 .875.39.875.874v5.65z"
          ></path>
        </g>
      </svg>
      <span>Promoted by mypaynet</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.promoted-trend-item
  width: 100%
  padding: 12px 16px
  cursor: pointer
  transition-duration: .2s
  transition-property: background-color, box-shadow
  &:hover
    background: rgba(0, 0, 0, 0.03)
  &__name
    padding-top: 2px
    font-weight: 700
    line-height: 20px
    overflow-wrap: break-word
  &__description
    padding-top: 2px
    color: rgb(83, 100, 113)
    line-height: 20px
    overflow-wrap: break-word
  &__by
    margin-top: 4px
    line-height: 16px
    font-size: 13px
    color: rgb(83, 100, 113)
    overflow-wrap: break-word
    display: inline-flex
    align-items: center
    svg
      height: 1em
      margin-right: 4px
      user-select: none
      fill: currentcolor
      display: inline-block
</style>
