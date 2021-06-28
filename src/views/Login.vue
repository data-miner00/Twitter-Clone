<template>
  <div class="login">
    <div class="login__content">
      <div class="login__content__logo">
        <img src="http://localhost:8080/logo.svg" alt="logo" />
      </div>
      <div class="login__content__title">Log in to Finicky</div>
      <div class="login__content__input id">
        <div>
          <input type="text" placeholder="Phone, email or username" />
        </div>
      </div>
      <div class="login__content__input password">
        <div>
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div class="login__content__login-button">
        <button @click="1">
          <div>Log in</div>
        </button>
      </div>
      <div class="login__content__actions">
        <div>
          <router-link class="login__content__actions__action" to="/"
            >Forgot password?</router-link
          >
          •
          <router-link class="login__content__actions__action" to="/register"
            >Register an account</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    input_acc: "",
    input_password: "",
  }),
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"
.login
  &__content
    padding: 0 20px
    max-width: 400px
    &__logo
      padding: 0 16px
      img
        height: 60px
    &__title
      margin-top: 32px
      margin-bottom: 12px
      padding: 0 16px
      font-size: 2em
      font-weight: 700
      line-height: 36px

    &__input

      padding: 12px 16px
      div
        border: 1px solid rgb(207, 217, 222)
        border-radius: 5px
        padding: 20px 5px
        input
          font-size: 1em
          border: none
          outline: none
    &__login-button
      padding: 11px
      button
        display: flex
        padding: 0 32px
        height: 46px
        justify-content: center
        align-items: center
        border-radius: 250px
        background: $primary
        opacity: 0.5
        width: 100%
        div
          width: fit-content
          font-weight: 600
          color: white
    &__actions
      color: $link
      font-size: 0.9em
      div
        width: fit-content
        margin: 19px auto 0
</style>
