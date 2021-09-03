<template>
  <div class="fun">
    <div class="fun__outer">
      <div class="fun__inner">
        <span>
          <span
            >Hmm...this page doesn’t exist. Try searching for something
            else.</span
          >
        </span>
        <router-link class="fun__inner__search" :to="{ name: 'Foryou' }">
          <span>Search</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"
.fun
  &__outer
    padding: 40px 12px
  &__inner
    margin-top: 40px
    padding: 20px 12px
    text-align: center
    & > *
      display: block
    span
      margin-bottom: 28px
      color: rgb(83, 100, 113)
      span
        overflow-wrap: break-word
    &__search
      min-height: 36px
      min-width: 36px
      background: $twitter-purple
      border-radius: 999px
      padding: 0 16px
      width: fit-content
      margin: 0 auto
      transition: background .2s ease
      &:hover
        background: #865dca
        // background: rgb(108, 77, 230)
      span
        color: white
        font-weight: 700
        line-height: 36px
</style>
