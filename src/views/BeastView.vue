<script setup>
import { useStoryblok } from "@storyblok/vue";
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute();
const slug = computed(() => route.params.slug);
const sbPath = computed(() => `magical-beasts/${slug.value}`);
const story = await useStoryblok(sbPath.value, { version: "draft" });
</script>

<template>
    <main class="beast-page">
      <StoryblokComponent v-if="story" :blok="story.content" /> 
    </main>
</template>

<style>
.beast-page{}
</style>