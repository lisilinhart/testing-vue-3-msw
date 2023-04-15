<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import MagicalBeast from "@/components/MagicalBeast.vue";

const route = useRoute();
const slug = computed(() => route.params.slug);
const sbPath = computed(() => `magical-beasts/${slug.value}`);
const { story } = await fetch(
  `https://api.storyblok.com/v1/cdn/stories/${sbPath.value}?token=${import.meta.env.VITE_SB_PREVIEW_TOKEN}&version=published&resolve_relations=BeastPage.beasts`
).then((res) => res.json());
</script>

<template>
  <main class="beast-page">
    <MagicalBeast v-if="story" :blok="story.content" />
  </main>
</template>
