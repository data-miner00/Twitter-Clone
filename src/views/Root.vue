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
          <div class="root__content__show__subtitle">Join Twitter today.</div>
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
    <Footer :navLinks="navLinks" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "../components/Footer.vue";

export default Vue.extend({
  components: {
    Footer,
  },
  data: () => ({
    input_identifier: "",
    input_password: "",
  }),
  computed: {
    navLinks() {
      return [
        {
          name: "About",
          destination: "/",
        },
        {
          name: "Help Center",
          destination: "/",
        },
        {
          name: "Terms of Service",
          destination: "/",
        },
        {
          name: "Privacy Policy",
          destination: "/",
        },
        {
          name: "Cookie Policy",
          destination: "/",
        },
        {
          name: "Ads info",
          destination: "/",
        },
        {
          name: "Blog",
          destination: "/",
        },
        {
          name: "Status",
          destination: "/",
        },
        {
          name: "Careers",
          destination: "/",
        },
        {
          name: "Brand Resources",
          destination: "/",
        },
        {
          name: "Advertising",
          destination: "/",
        },
        {
          name: "Marketing",
          destination: "/",
        },
        {
          name: "Twitter for Business",
          destination: "/",
        },
        {
          name: "Developers",
          destination: "/",
        },
        {
          name: "Directory",
          destination: "/",
        },
        {
          name: "Settings",
          destination: "/",
        },
        {
          name: "&copy; 2021 Twitter, Inc.",
          destination: "/",
        },
      ];
    },
  },
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
            background: $twitter-blue
          &.login

            color: $twitter-blue
            background: white
            border: 1px solid $twitter-blue

    &__illustration
      background-image: url("http://localhost:8080/login_hero.jpg")
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      min-height: 45vh

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
        background-color: $twitter-blue
</style>
