<template>
  <div class="root">
    <div class="root__content">
      <div class="wrap">
        <div class="root__content__show">
          <div class="root__content__show__logo">
            <img src="logo.svg" alt="luther" />
          </div>
          <div class="root__content__show__title">New Revolution</div>
          <div class="root__content__show__subtitle">Join Finicky today.</div>
          <div class="root__content__show__actions">
            <div class="root__content__show__actions__register"></div>
            <div class="root__content__show__actions__login"></div>
          </div>
        </div>
      </div>
      <div class="root__content__illustration"></div>
    </div>
    <nav class="root__footer"></nav>
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
.root


  &__content
    .wrap
      padding: 16px
    &__show
      padding: 20px

    &__illustration
      background-image: url("http://localhost:8080/login_hero.jpg")
      background-size: cover
      background-position: center
      background-repeat: no-repeat
      min-height: 45vh
</style>
