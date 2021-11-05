<template>
  <div class="followed">
    <div class="followed__description">
      <span
        >The Topics you follow are used to personalize the Tweets, events, and
        ads that you see, and show up publicly on your profile</span
      >
    </div>
    <div class="followed__topics">
      <FollowTopicItem
        v-for="(topic, index) in followTopics"
        :key="index"
        :title="topic.title"
        :category="topic.category"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FollowTopicItem from "@/components/FollowTopicItem.vue";

type FollowTopic = {
  title: string;
  category: string;
};

export default Vue.extend({
  components: {
    FollowTopicItem,
  },
  computed: {
    followTopics(): Array<FollowTopic> {
      return [
        {
          title: "Apple",
          category: "Tech brand",
        },
        {
          title: "Artificial intelligence",
          category: "Techonology",
        },
        {
          title: "Augmented reality",
          category: "Techonology",
        },
        {
          title: "Business & finance",
          category: "All about business & finance",
        },
        {
          title: "Business news",
          category: "News",
        },
        {
          title: "Cloud computing",
          category: "Technology",
        },
        {
          title: "Cloud platforms",
          category: "Technology",
        },
        {
          title: "Computer programming",
          category: "Technology",
        },
        {
          title: "Cybersecurity",
          category: "Technology",
        },
        {
          title: "Data science",
          category: "Technology",
        },
        {
          title: "Databases",
          category: "Technology",
        },
        {
          title: "Game development",
          category: "Gaming",
        },
        {
          title: "Information security",
          category: "Technology",
        },
        {
          title: "Internet of things",
          category: "Technology",
        },
        {
          title: "Linux",
          category: "Operating system",
        },
        {
          title: "Marketing",
          category: "Business & finance",
        },
        {
          title: "Massachusetts Institute of Technology",
          category: "Research university",
        },
        {
          title: "Microsoft Windows",
          category: "Operating system brand",
        },
        {
          title: "Open source",
          category: "Technology",
        },
        {
          title: "Physics",
          category: "Science",
        },
        {
          title: "Python",
          category: "Computer programming",
        },
        {
          title: "Science",
          category: "All about science",
        },
        {
          title: "Technology",
          category: "All about technology",
        },
        {
          title: "UX design",
          category: "Computer programming",
        },
        {
          title: "Web development",
          category: "Technology",
        },
        {
          title: "Wildlife photography",
          category: "Art",
        },
        {
          title: "データセンター",
          category: "IT テクノロジー",
        },
      ];
    },
  },
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_variables"

.followed
  &__description
    padding: 16px
    color: $post-action-color
    border-bottom: 1px solid rgb(239, 243, 244)
</style>
