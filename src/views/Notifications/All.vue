<template>
  <div class="all">
    <NotiItem
      type="follow"
      username="The world"
      avatar="/default_profile_bigger.png"
    />
    <NotiItem type="like" username="SNH" avatar="/default_profile_bigger.png">
      <span
        >Thanks for bringing out this, learned a lot from you. I am glad that
        Singapore has been sacked or else they will be involved in this
        predicament that we are in now. Good for them!</span
      >
    </NotiItem>
    <NotiSystemItem />
    <NotiItem
      type="retweet"
      username="𝘚𝘭ã𝘳𝘵𝘪𝘣𝘢𝘳𝘵𝘧å𝘴𝘵"
      avatar="/default_profile_bigger.png"
    >
      <span>
        Regression analysis cheat sheet #DataAnalytics #MachineLearning #BigData
        #DataScience #IIoT #PyTorch #Python #RStats #TensorFlow #JavaScript
        #ReactJS #GoLang #CloudComputing #DataScientist #100DaysOfCode
        #Programming #Coding #flutter #opensource #DevOps #CyberSecurity
        @Sheraj99 https://pic.twitter.com/elc44X2VeR
      </span>
    </NotiItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NotiItem from "@/components/NotiItem.vue";
import NotiSystemItem from "@/components/NotiSystemItem.vue";

export default Vue.extend({
  components: {
    NotiItem,
    NotiSystemItem,
  },
});
</script>

<style lang="sass" scoped></style>
