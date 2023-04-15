<script setup>
import BeastPage from "@/components/BeastPage.vue";
const { story } = await fetch(
  `https://api.storyblok.com/v1/cdn/stories/beasts?token=${import.meta.env.VITE_SB_PREVIEW_TOKEN}&version=draft&resolve_relations=BeastPage.beasts`
).then((res) => res.json());
</script>

<template>
  <main>
    <BeastPage v-if="story" :blok="story.content" />
  </main>
</template>
