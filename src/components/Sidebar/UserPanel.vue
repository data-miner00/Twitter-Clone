<template>
  <div class="user-panel">
    <div class="user-panel-inner" @click="isPanelClicked = !isPanelClicked">
      <div class="avatar-wrap a" size="39">
        <img :src="avatarUri" :alt="username" />
      </div>
      <div class="user-info">
        <div class="user-info-inner">
          <div class="user-name">
            <div class="user-name-inner">
              <span>{{ username }}</span>
            </div>
          </div>
          <div class="user-id">
            <div class="user-id-inner">
              <span>@{{ userid }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="chevron">
        <fa icon="chevron-down" />
      </div>
    </div>
    <div
      class="setting-popup"
      v-if="isPanelClicked"
      v-click-outside="verifyPanelState"
    >
      <div class="info-duplicate">
        <div class="avatar-wrap b" size="48">
          <img :src="avatarUri" :alt="username" />
        </div>
        <div class="user-info">
          <div class="user-info-inner">
            <div class="user-name">
              <div class="user-name-inner">
                <span>{{ username }}</span>
              </div>
            </div>
            <div class="user-id">
              <div class="user-id-inner">
                <span>@{{ userid }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="chevron">
          <fa icon="check" />
        </div>
      </div>
      <div class="actions">Report unusual behaviour or bug</div>
      <div class="actions" @click="logout">Logout @{{ userid }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    isPanelClicked: false,
  }),
  methods: {
    verifyPanelState(): void {
      if (this.isPanelClicked) this.isPanelClicked = false;
      else this.isPanelClicked = true;
    },
    logout(): void {
      console.log("nothing");
    },
  },
  computed: {
    avatarUri(): string {
      return "/default_profile_bigger.png";
    },
    username(): string {
      return "username";
    },
    userid(): string {
      return "userid";
    },
  },
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_mixins"
@import "../../assets/sass/_variables"

.user-panel
  margin: 10px 0
  position: relative

  &-inner
    padding: 12px
    height: 59px
    display: flex
    align-items: center
    @include set-border-round
    transition: background-color .2s
    cursor: pointer

    &:hover
      background-color: $twitter-purple-hover
//
.user-info
  &-inner
    margin: 0 10px
    line-height: 20px
    .user-name
      font-weight: 700

      &-inner
        height: 20px

        span
          font-size: 15px

    .user-id
      width: 100%

      &-inner
        height: 20px

        span
          font-size: 15px
          color: #777

.chevron
  display: flex
  flex-grow: 1
  justify-content: flex-end

.avatar-wrap
  @include set-border-round
  &.a
    width: 40px
    height: 40px

    img
      width: 40px

  &.b
    width: 48px
    height: 48px

    img
      width: 48px

.setting-popup
  position: absolute
  top: -210px
  left: -23px
  width: 300px
  height: 200px
  padding: 12px 0
  border-radius: 16px
  background: white
  box-shadow: unquote("rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px")

  .info-duplicate
    height: 73px
    width: 100%
    padding: 12px 16px
    display: flex
    align-items: center

  .actions
    border-top: 1px solid #eee
    height: 51px
    padding: 16px
    width: 100%
    font-size: 15px
    cursor: pointer
    transition: background .2s

    &:hover
      background: $hover-state-bg-1
</style>
