<template>
  <div class="home">
    <div class="home__write-status">
      <div class="home__write-status__container">
        <div class="home__write-status__container__left">
          <div>
            <img src="default_profile_bigger.png" alt="default profile" />
          </div>
        </div>
        <div class="home__write-status__container__right">
          <div class="home__write-status__container__right__input">
            <div>
              <label>What's happening?</label>
            </div>
          </div>
          <div class="home__write-status__container__right__actions">
            <div class="actions__left">
              <div class="actions__left__icon">
                <div><fa :icon="['far', 'image']" /></div>
              </div>
              <div class="actions__left__icon">
                <div><fa :icon="['fas', 'hand-holding-heart']" /></div>
              </div>
              <div class="actions__left__icon">
                <div><fa :icon="['fas', 'chart-line']" /></div>
              </div>
              <div class="actions__left__icon">
                <div><fa :icon="['far', 'smile']" /></div>
              </div>
              <div class="actions__left__icon">
                <div><fa :icon="['far', 'calendar-alt']" /></div>
              </div>
            </div>
            <div class="actions__right">
              <div>
                <div>Tweet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="primary-seperator"></div>
    <div class="home__post-section">
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostItem from "../components/PostItem.vue";

export default Vue.extend({
  name: "Home",
  components: {
    PostItem,
  },
});
</script>

<style lang="sass" scoped>
.home
  width: 600px
  min-height: 100vh
  &__write-status
    padding: 4px 0 8px
    border-bottom: 1px solid #eee
    &__container
      padding: 0 16px
      display: flex
      &__left
        padding-top: 4px
        margin-right: 12px

        div
          border-radius: 999px
          overflow: hidden
          height: 48px
          width: 48px
          img
            width: 48px
            height: 48px

      &__right
        display: flex
        flex-direction: column
        flex-grow: 1
        &__input
          padding: 12px 0
          font-size: 21px
          font-weight: 450
          color: rgb(83, 100, 113)
        &__actions
          display: flex
          justify-content: space-between
          margin-top: 12px
          .actions__left
            display: flex
            font-size: 20px

            &__icon
              cursor: pointer
              text-align: center
              border-radius: 999px
              display: flex
              justify-content: center
              align-items: center
              width: 38px
              height: 38px

              &:hover
                background: rgba(121,75,196, 0.1)

              div
                color: rgb(122, 75, 196)
          .actions__right
            background: rgba(121,75,196,0.5)
            border-radius: 999px
            font-weight: 700
            color: white
            & > div
              padding: 0 15px
              display: flex
              align-items: center
              height: 38px
</style>
