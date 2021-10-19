<template>
  <div class="all">
    <NotiItem />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NotiItem from "@/components/NotiItem.vue";
export default Vue.extend({
  components: {
    NotiItem,
  },
});
</script>

<style lang="sass" scoped></style>
