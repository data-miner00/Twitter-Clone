<template>
  <div class="follow-btn">
    <div>
      <span>Follow</span>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.follow-btn
    min-height: 32px
    min-width: 79px
    border-radius: 250px
    border: 1px solid rgb(121, 75, 196)
    color: rgb(121, 75, 196)
    display: flex
    justify-content: center
    align-items: center
    font-weight: 700
    transition: background .2s
    &:hover
        background: rgba(121, 75, 196, .1)
    div
        width: fit-content
</style>
