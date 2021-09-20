<template>
  <div class="lists">
    <ForYouContentWrapper title="Pinned Lists" :hasShowMoreBtn="false">
      <div class="lists__pinned-lists empty">
        <span
          >Nothing to see here yet — pin your favorite Lists to access them
          quickly.</span
        >
      </div>
    </ForYouContentWrapper>
    <div class="secondary-seperator"></div>
    <ForYouContentWrapper title="Discover new Lists">
      <DiscoverListItem />
      <DiscoverListItem />
      <DiscoverListItem />
    </ForYouContentWrapper>
    <div class="secondary-seperator"></div>
    <ForYouContentWrapper title="Your Lists" :hasShowMoreBtn="false">
      <div class="lists__your-lists empty">
        <span
          >You haven't created or followed any Lists. When you do, they'll show
          up here.</span
        >
      </div>
    </ForYouContentWrapper>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ForYouContentWrapper from "@/components/ForYouContentWrapper.vue";
import DiscoverListItem from "@/components/DiscoverListsItem.vue";
export default Vue.extend({
  components: { ForYouContentWrapper, DiscoverListItem },
});
</script>

<style lang="sass" scoped>
.lists
  width: 600px
  .empty
    padding: 32px
    margin-top: 8px
    // scrollbar-color: rgb(185, 202, 211) rgb(247, 249, 249)
    font-size: 15px
    color: rgb(83, 100, 113)
</style>
