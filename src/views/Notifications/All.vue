<template>
  <div class="all">
    <NotiItem />
    <NotiSystemItem />
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
