<template>
  <div class="bookmarks">
    <div class="bookmarks__content" v-if="hasBookmarks">hello</div>
    <div class="bookmarks__no-bookmarks" v-else>
      <div class="bookmarks__no-bookmarks__title">
        You haven’t added any Tweets to your Bookmarks yet
      </div>
      <div class="bookmarks__no-bookmarks__subtitle">
        When you do, they'll show up here.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    hasBookmarks: false,
  }),
});
</script>

<style lang="sass" scoped>
.bookmarks
  width: 600px
  display: flex
  &__no-bookmarks
    max-width: 400px
    align-self: center
    width: 100%
    margin: 32px auto
    padding: 0 32px
    &__title
      margin-bottom: 8px
      line-height: 36px
      font-size: 31px
      font-weight: 800
      text-align: left
    &__subtitle
      margin-bottom: 28px
      color: rgb(83, 100, 113)
      font-weight: 400
      font-size: 15px
</style>
