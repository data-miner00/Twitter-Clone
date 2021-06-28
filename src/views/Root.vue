<template>
  <div class="root">
    <div class="root__content">
      <div class="wrap">
        <div class="root__content__show">
          <div class="root__content__show__logo">
            <img src="logo.svg" alt="luther" />
          </div>
          <div class="root__content__show__title">
            <span>New Revolution</span>
          </div>
          <div class="root__content__show__subtitle">Join Finicky today.</div>
          <div class="root__content__show__actions">
            <router-link
              to="/register"
              class="root__content__show__actions__action register"
            >
              <div>Register</div>
            </router-link>
            <router-link
              to="/login"
              class="root__content__show__actions__action login"
            >
              <div>Login</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="root__content__illustration"></div>
    </div>
    <nav class="root__footer">
      <router-link to="/" class="root__footer__link">About</router-link>
      <router-link to="/" class="root__footer__link">Help Center</router-link>
      <router-link to="/" class="root__footer__link"
        >Terms of Service</router-link
      >
      <router-link to="/" class="root__footer__link"
        >Privacy Policy</router-link
      >
      <router-link to="/" class="root__footer__link">Cookie Policy</router-link>
      <router-link to="/" class="root__footer__link">Ads info</router-link>
      <router-link to="/" class="root__footer__link">Blog</router-link>
      <router-link to="/" class="root__footer__link">Status</router-link>
      <router-link to="/" class="root__footer__link">Careers</router-link>
      <router-link to="/" class="root__footer__link"
        >Brand Resources</router-link
      >
      <router-link to="/" class="root__footer__link">Status</router-link>
      <router-link to="/" class="root__footer__link">Careers</router-link>
      <router-link to="/" class="root__footer__link"
        >Brand Resources</router-link
      >
      <router-link to="/" class="root__footer__link">Advertising</router-link>
      <router-link to="/" class="root__footer__link">Marketing</router-link>
      <router-link to="/" class="root__footer__link"
        >Finicky for Business</router-link
      >
      <router-link to="/" class="root__footer__link">Developers</router-link>
      <router-link to="/" class="root__footer__link">Directory</router-link>
      <router-link to="/" class="root__footer__link">Settings</router-link>
      <div to="/" class="root__footer__link">&copy; 2021 Finicky, Inc.</div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    input_identifier: "",
    input_password: "",
  }),
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/_variables"
.root
  &__content
    .wrap
      padding: 16px
    &__show
      padding: 20px
      &__logo
        img
          height: 60px
      &__title
        padding: 35px 0
        font-size: 2.8em
        font-weight: 700
        line-height: 52.5px

      &__subtitle
        font-size: 1.3em
        font-weight: 700
        margin-bottom: 20px

      &__actions
        display: flex
        flex-direction: column
        flex-shrink: 0
        flex-basis: auto

        &__action
          display: block
          padding: 0 32px
          margin-bottom: 16px
          min-height: 48px
          font-weight: 600
          width: 100%
          border-radius: 250px
          overflow: hidden
          display: flex
          justify-content: center
          align-items: center

          div
            width: fit-content
            height: fit-content
            line-height: 20px
          &.register

            color: white
            background: $primary
          &.login

            color: $primary
            background: white
            border: 1px solid $primary

    &__illustration
      background-image: url("http://localhost:8080/login_hero.jpg")
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      min-height: 45vh

  &__footer
    padding: 12px 16px
    display: flex
    flex-wrap: wrap
    justify-content: center

    &__link
      display: block
      padding-right: 16px
      margin: 4px 0
      font-size: .75em
      color: $foot

@media screen and (min-width: 500px)
  .root
    &__content
      &__show
        max-width: 600px
        margin: 0 auto
        &__title
          font-size: 4em
          font-weight: 700
          line-height: 84px
        &__subtitle
          font-size: 2em
          font-weight: 700

        &__actions
          flex-direction: row
          align-items: stretch
          &__action
            margin-bottom: 20px
            transition: background 0.2s

            &.register
              margin-right: 20px
              &:hover
                background: rgb(26, 145, 218)

            &.login
              &:hover
                background: rgba(29, 161, 242, 0.1)
@media screen and (min-width: 1000px)
  .root
    height: 100vh
    &__content
      display: flex
      flex-direction: row-reverse
      // flex: 1 1 auto

      // justify-content: stretch

      .wrap
        flex-basis: 50%
        min-height: 90vh
        flex-grow: 1
        display: flex
        align-items: center

      &__show
        margin: 0
        &__title
          margin: 48px 0
          padding: 0
        &__subtitle
          margin-bottom: 32px


      &__illustration
        flex-basis: 50%
        flex-grow: 1
        background-color: $primary
</style>
