<template>
  <div class="topic-item">
    <div class="topic-item__left">
      <div class="topic-item__left__topic">Loona</div>
      <div class="topic-item__left__category">K-pop group</div>
    </div>
    <div class="topic-item__right">
      <FollowButton />
      <div class="topic-item__right__remove">
        <div>
          <fa icon="times" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FollowButton from "@/components/FollowButton.vue";
export default Vue.extend({
  props: {
    //
  },
  components: {
    FollowButton,
  },
});
</script>

<style lang="sass" scoped>
.topic-item
  padding: 12px 16px
  display: flex
  align-items: center
  justify-content: space-between
  cursor: pointer
  transition: background .2s
  border-bottom: 1px solid rgb(239, 243, 244)
  &:hover
    background: rgba(0, 0, 0, 0.03)
  &__left
    font-size: 15px
    &__topic
      font-weight: 700
    &__category
      color: #536471
  &__right
    display: flex
    align-items: center

    &__remove
      border-radius: 250px
      width: 32px
      height: 32px
      display: flex
      justify-content: center
      align-items: center
      transition: background .2s, color .2s
      margin-left: 6px
      div
        width: fit-content
        color: #536471
      &:hover
        background: rgba(121, 75, 196, .1)
        // color: rgb(29, 161, 242)
</style>
