<template>
  <div class="sidewall">
    <div class="sidewall__wrap">
      <div class="sidewall__search-box">
        <div class="sidewall__search-box__search-icon">
          <div>
            <fa :icon="['fas', 'search']" />
          </div>
        </div>
        <div class="sidewall__search-box__input">
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>
    </div>
    <div class="sidewall__trends"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="sass" scoped>
.sidewall
  &__wrap
    padding: 4px 0px 2px 0
    position: fixed
    top: 0
    height: 53px
    width: 350px
  &__search-box
    display: flex
    background: rgb(239, 243, 244)
    align-items: center
    border-radius: 250px
    color: #536471
    &__search-icon
      width: 35px
      height: 30px
      display: flex
      justify-content: flex-end
      align-items: center
      font-size: 1em
      margin-right: 10px
      div
        width: fit-content
    &__input
      background: transparent
      flex-grow: 1
      input
        background: transparent
        line-height: 20px
        font-size: 15px
        padding: 12px
        border: none
        width: 100%
</style>
