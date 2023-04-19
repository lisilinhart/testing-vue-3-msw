<script setup>
import { ref } from "vue";
import BeastPage from "@/components/BeastPage.vue";
const loadingText = ref('Loading...');
const story = ref(null);

try {
  const response = await fetch(
    `https://api.storyblok.com/v1/cdn/stories/beasts?token=${import.meta.env.VITE_SB_PREVIEW_TOKEN}&version=draft&resolve_relations=BeastPage.beasts`
  )
  const responseJSON = await response.json();
  if (response.status === 200) {
    loadingText.value = null;
    story.value = responseJSON.story
  } else {
    throw new Error(responseJSON.errorMessage);
  }
} catch (error) {
  loadingText.value = error || 'Loading failed';
}
</script>

<template>
  <main>
    <span v-if="loadingText">{{ loadingText }}</span>
    <BeastPage v-else-if="story" :blok="story.content" />
  </main>
</template>
